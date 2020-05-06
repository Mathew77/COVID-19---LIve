import React, {useEffect, useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { fetchAllHealthTipsType } from '../../actions/healthtips'
import {  FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import ModalDelete from './ActionModal/ModalDelete';
import ModalEdit from './ActionModal/ModalEdit';

const FacilitiesListTable = (props) => {

  const healthtipstype = useSelector(state => state.healthtips.types);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [collectmodal, setcollectmodal] = useState([])
  const [open, setOpen] = useState(false);
  const handleClose = () => {setOpen(false)};
  const [open2, setOpen2] = useState(false);
  const handleClose2 = () => {setOpen2(false)};
  console.log(healthtipstype)
  useEffect(() => {
      setLoading('true');
      const onSuccess = () => {
        setLoading(false)
      }
      const onError = () => {
        setLoading(false)     
      }
    dispatch(fetchAllHealthTipsType(onSuccess,onError))
  }, [dispatch])
  //const questList = questionsList

const editDetail = (detail) =>{
  console.log(detail)
  setOpen2(true);
  setcollectmodal({...collectmodal, ...detail});
}
const deleteDetail = (detail) =>{
  console.log(detail)
  setOpen(true);
  setcollectmodal({...collectmodal, ...detail});
}


const actionButtons = (e) =>{

  return (

      <Menu>
          <MenuButton style={{ backgroundColor:"#3F51B5", fontSize:"16px", color:"#fff", border:"2px solid #3F51B5", borderRadius:"4px", width:"80px", heigth:"80px"}}>
            Actions <span aria-hidden>▾</span>
          </MenuButton>
          <MenuList style={{hover:"#eee"}}>
            <MenuItem onSelect={() => editDetail(e)}><FaPencilAlt color="primary" size="15px"/>{" "} Edit</MenuItem>             
            
            <MenuItem onSelect={() => deleteDetail(e)}><FaTrashAlt color="primary" size="15px"/>{" "}Delete</MenuItem>
             
          </MenuList>
      </Menu>
      )

}
  return (

        <PerfectScrollbar>
          <div >
          <MaterialTable
        title="List of Health Tips Types"
        columns={[
          { title: " ID", field: "Id",filtering: false },
          {
            title: "Title",
            field: "title",
            filtering: false
          },
          
          {
            title: "Action",
            field: "actions",
            filtering: false,
          },
        ]}
        isLoading={loading}
        data={healthtipstype.map((row) => ({
          Id: row.id,
          title: row.name,          
          actions: actionButtons(row)

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
      <ModalDelete open={open} handleClose={handleClose} tips={collectmodal} />
      <ModalEdit open={open2} handleClose={handleClose2} tips={collectmodal} />
      </div>
    </PerfectScrollbar>
     
  );
  
};




export default FacilitiesListTable;
