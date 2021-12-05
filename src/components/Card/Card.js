import React from "react"
import './card.modules.css'
import Card from 'react-bootstrap/Card'

// API KEY: 137049f91b254a0d8f4a3c95353c3935

const CardComponent = (props) => {

    return (
      //   <Card sx={{ maxWidth: 345 }}>
      //   <CardActionArea>
      //     <CardMedia
      //       component="img"
      //       height="200"
      //       image={props.img}
      //       alt="meerkat"
      //     />
      //     <CardContent>
      //       <Typography gutterBottom variant="h5" component="div">
      //        {props.title}
      //       </Typography>
      //       <Typography variant="body2" color="text.secondary">
      //       {props.txt}
      //       </Typography>
      //     </CardContent>
      //   </CardActionArea>
      // </Card>

      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.txt}</Card.Text>
        </Card.Body>
      </Card>
    )
}


export default CardComponent