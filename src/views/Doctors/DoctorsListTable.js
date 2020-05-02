import React, {useEffect, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchAllDoctors } from '../../actions/doctors'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const DoctorsListTable = () => {
  const doctorsList = useSelector(state => state.doctors.list);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
 console.log(doctorsList)
  useEffect(() => {
      setLoading('true');
      const onSuccess = () => {
        setLoading(false)
      }
      const onError = () => {
        setLoading(false)     
      }
    dispatch(fetchAllDoctors(onSuccess,onError))
  }, [dispatch])
  //const questList = questionsList


  return (

        <PerfectScrollbar>
          <div >
          <MaterialTable
        title="List of Doctors"
        columns={[
          { title: " ID", field: "Id" },
          {
            title: "Name",
            field: "name",
          },
          
          {
            title: "Contact ",
            field: "contact",
            filtering: false
          },
          {
            title: "Second Contact",
            field: "contact2",
            filtering: false
          },
          
        ]}
        isLoading={loading}
        data={doctorsList.map((row) => ({
          Id: row.id,
          name: row.surname + row.firstname,          
          conatct1: row.contact1,
          contact2: row.contact2,

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



export default DoctorsListTable;
