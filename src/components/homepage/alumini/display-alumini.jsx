import React from 'react'
import { Card } from 'react-bootstrap';
import { aluminiData } from '../../../Data/homepage/aluminiData';

export const DisplayAlumini = (props) => {
    const [data, setData] = React.useState([]);

    const getRandomObject = (aData, num) => {
        const shuffled = [...aData].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    };


    React.useEffect(() => {
        setData(getRandomObject(aluminiData, 4))
    }, [aluminiData])

    return (
        <>
            <div className='d-flex'>
                {!!data && data.map(x => <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={x.profileImage} style={{ height: "14rem" }} />
                    <Card.Body>
                        <Card.Title>{x.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{x.companyName}</Card.Subtitle>
                        <Card.Text>
                            {x.description}
                        </Card.Text>
                    </Card.Body>
                </Card>)}
            </div>
        </>
    )
}
