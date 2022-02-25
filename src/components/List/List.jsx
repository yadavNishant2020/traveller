import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyle from "./style";
function List() {
  const classes = useStyle();
  const [type, setType] = useState("restaurants");
  const [rating, setrating] = useState(0);
  const places = [
    { name: "cool place" },
    { name: "cool beer" },
    { name: "cool vodka" },
    { name: "cool place" },
    { name: "cool beer" },
    { name: "cool vodka" },
    { name: "cool place" },
    { name: "cool beer" },
    { name: "cool vodka" },
  ];
  return (
    <div className={classes.container}>
      <Typography varient="h4">
        Restaurants, Hotels & Attractions around you.
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels ">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setrating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
