import logo from '../logo.svg';
import '../App.css';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import {Card, ListGroup, ListGroupItem, ProgressBar} from 'react-bootstrap'
import {useEffect, useState} from "react";
import axios from "axios";


function Completionist() {

    return (<span className="remain">GAME OVER</span>);

}

function Quiz() {
    const [PageNumber, setPageNumber] = useState(0);
    const [qList, setQList] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            getDB();
        }
        , [PageNumber]);

    const url = `https://kenken0803.herokuapp.com/quiz?start=${PageNumber}`;

    const getDB = async () => {
        try {
            const qList = await axios.get(url);
            if (qList.data.length === 0) {
                alert("끝");
                return false;
            }
            setQList(qList);
            setLoading(false);
            console.log(qList.data);
        } catch (err) {
            console.log(err);
            alert(err);
            await getDB();
        }
    }

    const next = () => setPageNumber(PageNumber + 1);
    const prev = () => {
        if (PageNumber < 1) {
            return false;
        } else {
            setPageNumber(PageNumber - 1);
        }
    }
    const chk = (input) => {
        if (qList.data[0].Answer == input.target.id) {
            alert("정답입니다");
            next();
        } else {
            alert("틀렸습니다")
            prev();
        }
    }

    return (
        <div className="App">
            {loading ? <>로딩중..
                    <img src={logo} className="App-logo" alt="LOADING..."/>
                </>
                :
                <Countdown
                    date={Date.now() + 10000}
                    intervalDelay={0}
                    precision={3}
                    renderer={QuizBody}
                    PageNumber={PageNumber}
                    setPageNumber={setPageNumber}
                    next={next}
                    prev={prev}
                    data={qList.data}
                    chk={chk}
                />
            }
        </div>
    );
}


const QuizBody = ({total, completed, props}) => {

    if (completed) {

        return <Completionist/>;

    } else {

        return <div>
            <Card border="primary" style={{width: '18rem'}}>
                {/*<Card.Img variant="top" src="public/q1.png"/>*/}
                <Card.Body>
                    <Card.Title>{props.PageNumber + 1} 번 문제</Card.Title>
                    <hr/>
                    <Card.Text>
                        {props.data[0].Contents}
                    </Card.Text>
                    <hr/>
                    <Card.Title className="remain">남은 시간 : {total}ms</Card.Title>
                    <ProgressBar variant="danger" animated now={total / 100}/>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="rowrow" id="1" onClick={props.chk}>{props.data[0].Choice1}</ListGroupItem>
                    <ListGroupItem className="rowrow" id="2" onClick={props.chk}>{props.data[0].Choice2}</ListGroupItem>
                    <ListGroupItem className="rowrow" id="3" onClick={props.chk}>{props.data[0].Choice3}</ListGroupItem>
                    <ListGroupItem className="rowrow" id="4" onClick={props.chk}>{props.data[0].Choice4}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Text>출제자 : {props.data[0].Author}</Card.Text>
                    <hr/>
                    <Card.Link onClick={props.prev} className="rowrow">이전 문제</Card.Link> &nbsp;
                    <Card.Link onClick={props.next} className="rowrow">문제 스킵</Card.Link>
                </Card.Body>
            </Card>
        </div>;

    }
};

export default Quiz;
