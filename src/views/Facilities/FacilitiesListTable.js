import React, {useEffect, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchAllFacilities } from '../../actions/facilities'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const FacilitiesListTable = () => {
  const facilitiesList = useSelector(state => state.facilities.list);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
 console.log(facilitiesList)
  useEffect(() => {
      setLoading('true');
      const onSuccess = () => {
        setLoading(false)
      }
      const onError = () => {
        setLoading(false)     
      }
    dispatch(fetchAllFacilities(onSuccess,onError))
  }, [dispatch])
  //const questList = questionsList


  return (

        <PerfectScrollbar>
          <div >
          <MaterialTable
        title="Facilities by Country"
        columns={[
          { title: " ID", field: "Id" },
          {
            title: "Country",
            field: "country",
          },
          
          {
            title: "Contact Number",
            field: "contact",
            filtering: false
          },
          {
            title: "Email",
            field: "email",
            filtering: false
          },
          {
            title: "Address",
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
        data={facilitiesList.map((row) => ({
          Id: row.id,
          country: row.name,          
          contact: row.contact,
          email: '--',
          address: '--',
          others: '--',
         
          actions: <Link to ={{ 
                        pathname: "/",  
                        state: { getpatientlists:{row}}
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



export default FacilitiesListTable;
