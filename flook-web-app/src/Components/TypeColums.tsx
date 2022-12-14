import * as React from 'react';
import moment from "moment";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GridActionsCellItem, GridRowId, GridRowParams, GridColumns } from '@mui/x-data-grid-pro';
import { AntSwitch } from '../Assets/Theme/AppStyle';
import { IconPhoto } from '@tabler/icons';
import { useDispatch } from 'react-redux';

const deleteUser = (id: GridRowId) => () => {
  setTimeout(() => {
    
    alert(JSON.stringify(id))
  });
};

export const columAction = {
  width: 120,
  headerName: '##',
  field: 'actions',
  type: 'actions',
  getActions: (params: GridRowParams) => [
    <GridActionsCellItem 
      label="Edit" 
      sx={{m:0,p:0}} 
      icon={<SettingsOutlinedIcon sx={{m:0,p:0}}/>}
    />,
    <GridActionsCellItem 
      label="isActive"
      sx={{m:0,p:0}} 
      icon={
        <Stack direction="row" spacing={1} alignItems="center">
          <AntSwitch defaultChecked={params.row.isActive ? true : false} inputProps={{ 'aria-label': 'ant design' }} />
        </Stack>
      }
    />,
    <GridActionsCellItem 
      label="Delete" 
      sx={{m:0,p:0}} 
      icon={<DeleteOutlineOutlinedIcon sx={{m:0,p:0}}/>}  
      onClick={deleteUser(params.row._id)}
    />,
  ],
}




// 
// ========================== Info table ====================================>>>
export const columnsUsers: any = [
  { width: 100, editable: true, hide: true, field: "id", headerName: "Stt" },
  { width: 120, editable: true, field: "images", headerName: "Avatar", renderCell: (params: any) => params.row.images.wallPaper === '' ? <IconPhoto/> : <Avatar src={'https://nhadat24h.com/uploads/bds/201904/14/926145_083922_4.jpg'} alt='images user'/>},
  { width: 200, editable: false, field: "email", headerName: "Email" },
  { width: 170, editable: true, field: "displayName", headerName: "DisplayName" },
  { width: 150, editable: false, field: "userName", headerName: "UserName" },
  { width: 150, editable: false, hide: true, field: "password", headerName: "M???t kh???u" },
  { width: 170, editable: false, field: "phoneNumber", headerName: "Phone Number" },
  { width: 170, editable: false, field: "roles", headerName: "Roles", renderCell: (params: any) => params.row.roles.map((item: any) =>  item.name).join(", ")},
  {...columAction}
]

 

// ========================== Info model ====================================>>>

export const InfoModelUser = [
  {
    field: "_id",
    class: "col-md-6 mb-3",
    classInput: "form-control",
    label: "M?? ng?????i d??ng",
    placeholder: "Nh???p m?? ng?????i d??ng",
    disabled: true,
  },
  { field: "displayName", class: "col-md-6 mb-3", classInput: "form-control", label: "H??? t??n", placeholder: "Nh???p h??? t??n" },
  { field: "userName", class: "col-md-6 mb-3", classInput: "form-control", label: "T??i kho???n", placeholder: "Nh???p t??i kho???n" },
  { field: "password", class: "col-md-6 mb-3", classInput: "form-control", label: "M???t kh???u", placeholder: "Nh???p m???t kh???u" },
  { field: "email", class: "col-md-6 mb-3", classInput: "form-control", label: "Email", placeholder: "Nh???p email" },
  { field: "phoneNumber", class: "col-md-6 mb-3", classInput: "form-control", label: "S??? ??i???n tho???i", placeholder: "Nh???p s?? ??i???n tho???i" },
  { field: "roles", class: "col-md-6 mb-3", classInput: "form-control", label: "Lo???i ng?????i d??ng" },
];

export const InfoModelMovie = [
  { field: "_id", class: "col-md-6 mb-2", label: "M?? phim", placeholder: "Nh???p ID", disabled: true },
  { field: "name", class: "col-md-6 mb-2", label: "T??n phim", placeholder: "Nh???p t??n phim" },
  { field: "trailer", class: "col-md-6 mb-3", label: "Trailer", placeholder: "Nh???p link trailer" },
  { field: "premiere", class: "col-md-6 mb-3", label: "Ng??y kh???i chi???u", placeholder: "Nh???p ng??y kh???i chi???u" },
  { field: "imag", class: "col-md-12 mb-2", label: "H??nh ???nh", placeholder: "Nh???p t??n phim", type: "file" },
  { field: "otherImages", class: "col-md-12 mb-3", label: "H??nh ???nh li??n quan", placeholder: "Nh???p t??n phim", type: "file" },
  { field: "discription", class: "col-12 mb-3", label: "M?? t???", placeholder: "Nh???p m?? t???" },
];

export const InfoModelCorn = [{ label: "" }];
