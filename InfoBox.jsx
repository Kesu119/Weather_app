import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import'./InfoBox.css';
export default function InfoBox({info}){
  const INIT_URL=
  "https://media.istockphoto.com/id/612023744/photo/blue-and-orange-sunset-sky.webp?b=1&s=612x612&w=0&k=20&c=geeS5y8vpvNL9o3EOsooT4a6LHKaowgR6-lz4zJegyo=";
  const COLD_URL=
  "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL=
  "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.webp?b=1&s=612x612&w=0&k=20&c=WoRtc78gED_uzRG-aGmdUAAdCrM7XI64gYKdqBS1jXk=";
  const RAIN_URL=
  "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?b=1&s=612x612&w=0&k=20&c=LkFSH_NR3RMwKLoTCf-GD1u6JaXbCq1a-DW4AvdhKdg=";
    
    return(
        <div classname="infobox">
            <div className='mainbox'>
            <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ?RAIN_URL
          :info.temp>15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{" "}
         {info.humidity > 80 ? (
          <ThunderstormIcon/>
         ): info.temp>15 ? (
          <WbSunnyIcon/>
         ) : (
          <AcUnitIcon/>
         )}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>temp={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}&deg;C</p>
        <p>min temp={info.tempMin}&deg;C</p>
        <p>max temp={info.tempMax}&deg;C</p>
        <p>the weather can be describes as <i>{info.weather}</i> feels like{info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    );
}