import React, {useEffect, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchAllRegisterUsers } from '../../actions/users'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import {url} from './../../api'
import axios from 'axios';



const UsersListTable = () => {
  const ListUsers = useSelector(state => state.listOfUsers.regusers);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  //console.log(ListUsers)

  useEffect(() => {
      setLoading('true');
      const onSuccess = () => {
        setLoading(false)
      }
      const onError = () => {
        setLoading(false)     
      }
    dispatch(fetchAllRegisterUsers(onSuccess,onError))
  }, [dispatch])

//   function countryname(getCountryId) {
//     let name;
//     axios.get(url+"country/"+getCountryId)
//     .then(res => {
//     console.log(res.data.name);
//     name = res.data.name;
//     })
//         console.log(name);
//         return name;
// }
const countryname = async(getCountryId) => {
  const res = await axios.get(url+"country/"+getCountryId)
   console.log(res.data.name)
}

  return (

        <PerfectScrollbar>
          <div >
          <MaterialTable
        title="List of Register Users"
        columns={[
          { title: " ID", field: "id" },
          {
            title: "Country",
            field: "country",
          },
          
          {
            title: "IMEI ",
            field: "imei",
            filtering: false
          },
          {
            title: "Created",
            field: "created",
            filtering: false
          },
          {
            title: "Address(Lat. & Long)",
            field: "address",
            filtering: false
          },
          {
            title: "Others",
            field: "others",
            filtering: false
          },
          {
            title: "Action",
            field: "actions",
            filtering: false,
          },
        ]}
        isLoading={loading}
        data={ListUsers.map((row) => ({
          id: row.id,
          country: countryname(row.country),          
          imei: row.imei,
          created: row.created,
          address: row.lng + row.lad,
          others: '--',
         
          actions: <Link to ={{ 
                        pathname: "/" 
                       
                        }} 
                        style={{ cursor: "pointer", color: "blue", 
                        fontStyle: "bold" }}>
                          <Tooltip title="Enter Result">
                            <IconButton aria-label="Enter Result" >
                            <VisibilityIcon color="primary"/>
                          </IconButton>
                          </Tooltip>
                        </Link>

            }))}
        options={{
        
          headerStyle: {
            backgroundColor: "#9F9FA5",
            color: "#000",
            margin: "auto"
          },
          filtering: true,          
          exportButton: true,
          
        }}

      />
          </div>
        </PerfectScrollbar>
     
  );
};



export default UsersListTable;
