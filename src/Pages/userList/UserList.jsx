import React, { useState } from 'react'
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import {UserRows} from '../../dummyData'
import {DeleteOutline} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const UserList = () => {

  const [data,setData]= useState(UserRows);
  const handleDelete = (id) =>{
    setData(data.filter((item)=>item.id !== id));
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200 , renderCell: (params) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={params.row.avatar} alt="" style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 10 }} />
              {params.row.username}
            </div>
          );
        }},
        { field: 'email', headerName: 'Email', width: 170 },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
         
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 160,
          renderCell: (params) => {
            return (
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Link to={"/user/"+params.row.id}>
                 <button
                  className="btn btn-primary btn-sm"
                  style={{
                    color: 'black',
                    backgroundColor: 'lightgreen',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '5px 10px',
                    marginRight:'20px',
                    cursor: 'pointer'
                  }}
                >
                  Edit    </button >  
                </Link>
                  
                <DeleteOutline onClick={()=>handleDelete(params.row.id)} className='deleteBtn'
                style={{
                  color:'red',
                  cursor:'pointer',
                  marginLeft:'10px'
                }} />
                
              </div>
            );
          }
        }
        
      ];
      
    
      const paginationModel = { page: 0, pageSize: 10 };
  return (
    <div className='userList'>
        <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </div>
  )
}

export default UserList
