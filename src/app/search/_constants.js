import { currencyFormatter, mileageFormatter } from "../_lib/formatConverter";

export const year = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024, 2025
  ];

export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'vehicle', headerName: 'Model', width: 230 },
    { field: 'mileage', headerName: 'Mileage', type: 'number', minWidth: 130, flex:0.5, valueFormatter: (value) => mileageFormatter.format(value.value) },
    { field: 'price', headerName: 'Price ($ CAD)', type: 'number', minWidth: 120, flex:0.5, valueFormatter: (value) => currencyFormatter.format(value.value) },
    { field: 'dealer', headerName: 'Seller', minWidth: 180, flex:1 }
];