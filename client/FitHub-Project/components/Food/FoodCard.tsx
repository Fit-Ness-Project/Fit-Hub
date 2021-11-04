import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import {Typography} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import * as React from "react";
import  { useEffect, useState , useRef } from 'react'
import {FoodR} from "./interface";
import axios from "axios";
import { StatusBar,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  TextInput
} from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import {
  Text,
  View
} from "../../components/Themed";
import { RootTabScreenProps } from "../../types";


// const ExpandMore = styled((props: ExpandMoreProps) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));

  export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    // FLAT REF
    let flatListRef = useRef<FlatList<FoodR> | null >();


    const [foodData, setFoodData] = useState<FoodR[]>([]);
    
    const [searchData, setSearchData] = useState<FoodR[]>([]);
  
  
    useEffect(() => {
      axios 
      .get('http://192.168.11.64:5000/recipes') 
       
      .then((response)=> {
         console.log(response.data)
          setFoodData(response.data)
          setSearchData(response.data)
      })
      .catch(( Error) => {
        console.log(Error);
      });
  
  }, [])
  
  const renderItems: React.FC<{item:FoodR}> = ({item})=> {
    return <TouchableOpacity onPress={()=> console.log(item)} activeOpacity={1} >
       <View >
           <Text>{item.recipeTitle} </Text>
       </View>
    </TouchableOpacity>
   }
   
   const ItemView: React.FC<{item:FoodR}> = ({item}) => {
       return (
           <Text>
               {item.recipeTitle.toUpperCase()}
           </Text>
       )
   }
   const ItemSeparatorView = () => {
       return (
           <View />
       )
   }





    return (
    <View >
     <StatusBar   />
     <Text   >Food's program   </Text>
       



      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          > */}
            {/* <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </View>
    );
  }




// return (
 
//   <View  style={styles.container}>

//      <StatusBar   />
//      <Text  style={styles.title} >Food's program   </Text>
       
//       <FlatList data={foodData}
//        renderItem={renderItems} 
//        keyExtractor={(item,i)=> i.toString()}
//        showsHorizontalScrollIndicator={false}
//       //  pagingEnabled 
 
     
//         />
//         <View style= {styles.dotview}>
//             {foodData.map(({},index:number)=> (
//                 <TouchableOpacity key={index.toString()} >
//                 </TouchableOpacity>
//             ))}
//         </View>
//      </View>
// )



// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
     
//     },
//     image:{
//       width: 350 ,
//       height: 230 ,
//       resizeMode: 'cover' ,
//       marginVertical : 10 ,
//     },
//     footer:{
//       flexDirection : 'row',
//       justifyContent: 'space-between',
//       height: 50 ,
//       paddingHorizontal: 50,
//       alignItems : 'center',
//       backgroundColor: '#000' ,
//     },
//     footerText:{
//      color: '#fff' ,
//      fontSize: 18 ,
//      fontWeight: 'bold',
//     },
//     carousel:{
//         maxHeight: 300
//     },
//     dotview:{
//       flexDirection : 'row',
//       justifyContent: 'center',
//       marginVertical : 20 ,
//     },
//     circle:{
//         width:10,
//         height:10,
//         backgroundColor: "grey",
//         borderRadius: 50,
//     },
//     title:{
//         color: 'white',
   
//       fontSize: 25 ,
//       fontWeight: 'bold', 
//       backgroundColor: "black"
//     }

// })
