'use client'

import { useState } from "react";
import vehicles from '../getVehicle/vehicle.json'
import styles from './page.module.css'
import { Box, Button, NativeSelect, InputLabel, FormControl, FormGroup, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function Search() {
  const modelInfo = vehicles;
  const [formData, setFormData] = useState({
    make: '', model: '', location: '', minYear: '', maxYear: ''
  });
  const [vehicleData, setVehicleData] = useState([]);
  const year = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024, 2025
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'vehicle', headerName: 'Model', width: 130 },
    { field: 'mileage', headerName: 'Mileage', type: 'number', width: 130 },
    { field: 'price', headerName: 'Price', type: 'number', width: 130 },
    { field: 'dealer', headerName: 'Seller', type: 'number', width: 130 }
  ];
  const rows = vehicleData?vehicleData.map((info, index) => {
    return {id: index, vehicle: info.name, mileage: info.mileage, price: info.price, dealer: info.dealer}
  }):[{id: 0, vehicle: "", mileage: "", price: "", dealer: ""}]

  const search = () => {
    fetch('http://localhost:3000/getResults', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Need to format output for filtering
        setVehicleData(data.output);
        console.log('RESPONSE DATA', data)
        // Exporting data?
      })
      .catch(error => {
        console.error('getResult fetch error [/search]:', error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    search();
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});

    if (event.target.name == 'minYear') {
      document.querySelectorAll('#maxYear > option').forEach(e => {
        e.classList.remove(styles.hide);
        if (e.value < event.target.value) { 
          e.classList.add(styles.hide);
        }
      })
    }
    if (event.target.name == 'maxYear') {
      document.querySelectorAll('#minYear > option').forEach(e => {
        e.classList.remove(styles.hide);
        if (e.value > event.target.value) { 
          e.classList.add(styles.hide);
        }
      })
    }
  }

  return (
    <>
      <div className='form-wrapper'>
        <Box sx={{ m: 1, maxWidth: 200 }}>
          <form onChange={handleChange} onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl fullWidth>
              <InputLabel variant="standard" shrink={true} htmlFor="selectMake">Makes</InputLabel>
              <NativeSelect defaultValue="" name="make" id="selectMake">
                <option value="">All Makes</option>
                <optgroup label="Popular Makes">
                  <option value="Acura">Acura</option>
                  <option value="Alfa Romeo">Alfa Romeo</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Buick">Buick</option>
                  <option value="Cadillac">Cadillac</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Chrysler">Chrysler</option>
                  <option value="Dodge or Ram">Dodge or Ram</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Ford">Ford</option>
                  <option value="GMC">GMC</option>
                  <option value="Honda">Honda</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Infiniti">Infiniti</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Kia">Kia</option>
                  <option value="Lamborghini">Lamborghini</option>
                  <option value="Land Rover">Land Rover</option>
                  <option value="Lexus">Lexus</option>
                  <option value="Lincoln">Lincoln</option>
                  <option value="Maserati">Maserati</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Mercedes-AMG">Mercedes-AMG</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="MINI">MINI</option>
                  <option value="Mitsubishi">Mitsubishi</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Ram">Ram</option>
                  <option value="Subaru">Subaru</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Volvo">Volvo</option>
                </optgroup>
                <optgroup label="All Makes">
                  <option value="AC">AC</option>
                  <option value="Acura">Acura</option>
                  <option value="Alfa Romeo">Alfa Romeo</option>
                  <option value="Allard">Allard</option>
                  <option value="AM General">AM General</option>
                  <option value="American Motors (AMC)">American Motors (AMC)</option>
                  <option value="Amphicar">Amphicar</option>
                  <option value="Ariel">Ariel</option>
                  <option value="Aston Martin">Aston Martin</option>
                  <option value="Audi">Audi</option>
                  <option value="Austin">Austin</option>
                  <option value="Austin-Healey">Austin-Healey</option>
                  <option value="Autozam">Autozam</option>
                  <option value="Bentley">Bentley</option>
                  <option value="BMW">BMW</option>
                  <option value="BrightDrop">BrightDrop</option>
                  <option value="Bugatti">Bugatti</option>
                  <option value="Buick">Buick</option>
                  <option value="Cadillac">Cadillac</option>
                  <option value="Caterham">Caterham</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="Chrysler">Chrysler</option>
                  <option value="Citroen">Citroen</option>
                  <option value="Daihatsu">Daihatsu</option>
                  <option value="Daimler">Daimler</option>
                  <option value="Datsun">Datsun</option>
                  <option value="De Soto">De Soto</option>
                  <option value="De Tomaso">De Tomaso</option>
                  <option value="DeLorean">DeLorean</option>
                  <option value="Diamond T">Diamond T</option>
                  <option value="Dodge">Dodge</option>
                  <option value="Dodge or Ram">Dodge or Ram</option>
                  <option value="Eagle">Eagle</option>
                  <option value="Excalibur">Excalibur</option>
                  <option value="Factory Five Racing">Factory Five Racing</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Fiat">Fiat</option>
                  <option value="Fisker">Fisker</option>
                  <option value="Ford">Ford</option>
                  <option value="Freightliner">Freightliner</option>
                  <option value="Genesis">Genesis</option>
                  <option value="GMC">GMC</option>
                  <option value="Hino">Hino</option>
                  <option value="Holden">Holden</option>
                  <option value="Honda">Honda</option>
                  <option value="Hudson">Hudson</option>
                  <option value="Hummer">Hummer</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Infiniti">Infiniti</option>
                  <option value="Intermeccanica">Intermeccanica</option>
                  <option value="International">International</option>
                  <option value="Isuzu">Isuzu</option>
                  <option value="Jaguar">Jaguar</option>
                  <option value="Jeep">Jeep</option>
                  <option value="Jensen">Jensen</option>
                  <option value="Kaiser">Kaiser</option>
                  <option value="Karma">Karma</option>
                  <option value="Kia">Kia</option>
                  <option value="Koenigsegg">Koenigsegg</option>
                  <option value="Lamborghini">Lamborghini</option>
                  <option value="Lancia">Lancia</option>
                  <option value="Land Rover">Land Rover</option>
                  <option value="Lexus">Lexus</option>
                  <option value="Lincoln">Lincoln</option>
                  <option value="Lotus">Lotus</option>
                  <option value="Lucid">Lucid</option>
                  <option value="Maserati">Maserati</option>
                  <option value="Maybach">Maybach</option>
                  <option value="Mazda">Mazda</option>
                  <option value="McLaren">McLaren</option>
                  <option value="McLaughlin-Buick">McLaughlin-Buick</option>
                  <option value="Mercedes-AMG">Mercedes-AMG</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Mercedes-Maybach">Mercedes-Maybach</option>
                  <option value="Mercury">Mercury</option>
                  <option value="MG">MG</option>
                  <option value="MINI">MINI</option>
                  <option value="Mitsubishi">Mitsubishi</option>
                  <option value="Morgan">Morgan</option>
                  <option value="MV-1">MV-1</option>
                  <option value="Nash">Nash</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Oldsmobile">Oldsmobile</option>
                  <option value="Packard">Packard</option>
                  <option value="Pagani">Pagani</option>
                  <option value="Plymouth">Plymouth</option>
                  <option value="Polestar">Polestar</option>
                  <option value="Pontiac">Pontiac</option>
                  <option value="Porsche">Porsche</option>
                  <option value="Radical">Radical</option>
                  <option value="Ram">Ram</option>
                  <option value="Renault">Renault</option>
                  <option value="Rivian">Rivian</option>
                  <option value="Rolls-Royce">Rolls-Royce</option>
                  <option value="Rover">Rover</option>
                  <option value="Saab">Saab</option>
                  <option value="Saturn">Saturn</option>
                  <option value="Scion">Scion</option>
                  <option value="Shelby">Shelby</option>
                  <option value="smart">smart</option>
                  <option value="Sterling">Sterling</option>
                  <option value="Studebaker">Studebaker</option>
                  <option value="Subaru">Subaru</option>
                  <option value="Sunbeam">Sunbeam</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Triumph">Triumph</option>
                  <option value="TVR">TVR</option>
                  <option value="VinFast">VinFast</option>
                  <option value="Volkswagen">Volkswagen</option>
                  <option value="Volvo">Volvo</option>
                  <option value="Willys">Willys</option>
                </optgroup>
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel variant="standard" shrink={true} htmlFor="selectModel">Model</InputLabel>
              <NativeSelect defaultValue="" name="model" id="selectModel">
                <option value="">All Models</option>
                {formData.make && modelInfo[formData.make].map((model, index) => 
                  <option key={index} value={model}>{model}</option>
                )}
              </NativeSelect>
            </FormControl>
            <FormControl>
              <InputLabel variant="standard" shrink={true} htmlFor="minYear">Min Year</InputLabel>
              <NativeSelect name="minYear" id="minYear" defaultValue="">
                <option value="">Min Year</option>
                {year.map((year, index) => 
                  <option key={index} value={year}>{year}</option>
                )}
              </NativeSelect>
            </FormControl>
            <FormControl>
              <InputLabel variant="standard" shrink={true} htmlFor="maxYear">Max Year</InputLabel>
              <NativeSelect name="maxYear" id="maxYear" defaultValue="">
                {year.map((year, index) => 
                  <option key={index} value={year}>{year}</option>
                )}
                <option value="">Max Year</option>
              </NativeSelect>
            </FormControl>
            <FormControl>
              <TextField  variant="outlined" label="Postal Code or City" id="postalCode" name="location" placeholder="S7M 8A2"/>
            </FormControl>
          </FormGroup>
          <Button type="submit" variant="outlined">Go</Button>
          </form>
        </Box>
      </div>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  )
}