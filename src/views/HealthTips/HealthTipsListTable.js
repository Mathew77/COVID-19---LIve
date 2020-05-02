import React, {useEffect, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchAllFHealthTips } from '../../actions/healthtips'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const FacilitiesListTable = () => {
  const healthtipsList = useSelector(state => state.healthtips.list);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
 console.log(healthtipsList)
  useEffect(() => {
      setLoading('true');
      const onSuccess = () => {
        setLoading(false)
      }
      const onError = () => {
        setLoading(false)     
      }
    dispatch(fetchAllFHealthTips(onSuccess,onError))
  }, [dispatch])
  //const questList = questionsList


  return (

        <PerfectScrollbar>
          <div >
          <MaterialTable
        title="List of Health Tips"
        columns={[
          { title: " ID", field: "Id" },
          {
            title: "Questions",
            field: "question",
          },
          
          {
            title: "Answers",
            field: "answer",
            filtering: false
          },
          
          {
            title: "Action",
            field: "actions",
            filtering: false,
          },
        ]}
        isLoading={loading}
        data={healthtipsList.map((row) => ({
          Id: row.id,
          question: row.question,          
          answer: row.answer,
          
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
