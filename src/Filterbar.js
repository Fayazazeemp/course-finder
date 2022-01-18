import React, { useState,useEffect } from 'react';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import Cards from './Cards';
import {
    Container,
    Button,
    InputAdornment,
    TextField,
    FormControlLabel,
    Checkbox
  } from "@material-ui/core";
  import { MenuBook, LocalLibrary } from "@material-ui/icons";
import useStyles from "./styles";

function Filterbar(props) {

    const [value, setValue] = useState("");
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [course,setCourse] = useState("");
    const [childSub,setchildSub] = useState("");
    const [checked,setChecked] = useState(false);
    const [cardShow,setcardShow] = useState(<Cards
        cn={""}
        cs={""}
        date={""}
        sp={false}
        subjectData={props.props}
    />);

    const refresh = () => {
        setCourse("");
        setchildSub("");
        setValue("");
        setChecked(false);
        setcardShow(<Cards
            cn={""}
            cs={""}
            date={""}
            sp={false}
            subjectData={props.props}
        />);
    }

    const search = () => {
            setcardShow(<Cards
                cn={course}
                cs={childSub}
                date={value}
                sp={checked}
                subjectData={props.props}
            />);
    }

    const checkboxClick = (e) => {
        setChecked(e.target.checked);
    }
    const classes = useStyles();

    useEffect(()=>{
      search()
    },[])
    return (

        <div style={{ marginTop: "20px" , marginLeft:'60px'}}>
        <div className={classes.container}>
        <Container align="center" style={{display:'flex'}}>
            
        <TextField
            onChange={(e) => setCourse(e.target.value)}
            value={course}
            className={classes.textfield}
            color="primary"
            id="input-with-icon-textfield"
            label="Course"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MenuBook />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

<TextField
            value={childSub}
            onChange={(e) => setchildSub(e.target.value)}
            className={classes.textfield}
            color="primary"
            id="input-with-icon-textfield"
            label="Child Subject"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalLibrary />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />



            <div className={classes.textfield} style={{marginTop:'35px', color:'black'}} >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker style={{color:'black'}}
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                        }}
                renderInput={(params) => <TextField style={{ color:'black'}} {...params} />}
                    />
                </LocalizationProvider>
            </div>

            <div className={classes.textfield} style={{display:'flex'}}>
            <Checkbox color="primary" style={{marginTop:'12px'}} checked={checked} onChange={checkboxClick} {...label} />
            <h3>Self Paced</h3>
             </div>

            
             <Button style={{marginTop:'27px', height:'40px'}} onClick={search} className={classes.textfield} variant="contained" color="primary">
            Search
             </Button>

             <Button onClick={refresh} className={classes.textfield}
            variant="contained"
            color="secondary" style={{ marginLeft: "5px" ,marginTop:'27px',height:'40px'}}> Reset </Button>
             </Container>

        </div>

        {cardShow}

        </div>
    )
}

export default Filterbar
