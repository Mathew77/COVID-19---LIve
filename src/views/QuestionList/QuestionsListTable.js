import React, {useEffect, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchAllQuestions } from './../../actions/questions'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const QuestionsListTable = () => {
  const questionsList = useSelector(state => state.questions.list);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState('')
  // useEffect(() => {
  //   setLoading('true');
  //   const onSuccess = () => {
  //     setLoading(false)
  //   }
  //   const onError = () => {
  //     setLoading(false)     
  //   }
  //   dispatch(fetchAllQuestions(onSuccess,onError));
  // }, [fetchAllQuestions]); //componentDidMount
  useEffect(() => {
      setLoading('true');
      const onSuccess = () => {
        setLoading(false)
      }
      const onError = () => {
        setLoading(false)     
      }
    dispatch(fetchAllQuestions(onSuccess,onError))
  }, [dispatch])
  //const questList = questionsList


  return (

        <PerfectScrollbar>
          <div >
          <MaterialTable
        title="Questions List Table"
        columns={[
          { title: " ID", field: "Id" },
          {
            title: "Question",
            field: "question",
          },
          
          {
            title: "Question Type ",
            field: "type",
            filtering: false
          },
          {
            title: "Option",
            field: "option",
            filtering: false
          },
          {
            title: "Action",
            field: "actions",
            filtering: false,
          },
        ]}
        isLoading={loading}
        data={questionsList.map((row) => ({
          Id: row.id,
          question: row.question,          
          type: row.checkstatusanswermode,
          option: row.options.length,
         
          actions: <Link to ={{ 
                        pathname: "/collect-result",  
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



export default QuestionsListTable;
