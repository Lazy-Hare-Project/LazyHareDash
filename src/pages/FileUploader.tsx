import * as React from 'react';
import {
    FormGroup,Grid,Paper,Alert,Button,Box,Input,Typography,
} from '@mui/material';
// import * as XLXS from 'xlsx';
import { uploadFile } from '../aws-services/uploadFiletoS3';

function FileUploader(){
    //onchange state:
    const [excelFile, setExcelFile] = React.useState<File|null>(null);
    const [typeError, setTypeError] = React.useState('');
    const [fileName, setFileName] = React.useState('');
    //submit State:
    // const [excelData, setExcelData] = React.useState([{}]);
    //onchange event:
    const handleFile = (e:any) => {
        const fileType = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ]
        try
        {        
            const files = (e.target as HTMLInputElement).files;
            if(files != null){
                let selectedFile = files[0];
                if(selectedFile&&fileType.includes(selectedFile.type)){
                    setTypeError('');
                    setExcelFile(selectedFile);
                    setFileName(selectedFile.name);
                    }
                else{
                    setTypeError('Please select only excel file type');
                }
        }
        }catch(error){
            console.error("An Error Has Occurred: " + error);
        }
    }
    const handleOnSubmit = (e:any)  => 
    {
        e.preventDefault();

        //read the excel file with XLXS an convert it to data object (Obtional)
        if(excelFile!= null){
            uploadFile(excelFile,fileName);
            // const workbook = XLXS.read(excelFile,{type: 'buffer'});
            // const worksheetname = workbook.SheetNames[0];
            // const worksheet = workbook.Sheets[worksheetname];
            // const data:Object[] = XLXS.utils.sheet_to_json(worksheet);
            // setExcelData(data);
        }
    }
    return(
    <Grid container spacing={1}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
        <Typography
        component='h3' 
        variant='h5'
        > Upload and View Excel File</Typography>
            {/* TODO: replace this div with Container classes from MUI*/}
            <form className = 'excel-process-form' onSubmit = {handleOnSubmit}>
                <FormGroup >
                <Box textAlign='center' 
                sx={{
                    display:'flex',
                    pb: 1
                    }}>                
                <Input  type = 'file' 
                className='excelInput' 
                required onChange={handleFile} />
                <Button 
                    sx ={{
                        width: 80,
                    }}
                    variant='contained'
                    type = 'submit' 
                    className = 'excel-submit'>Upload
                </Button>
                </Box>
                {
                    (typeError==='')?(<></>):
                    (
                        <Alert severity='error'>{typeError}</Alert>
                    )
                }
                </FormGroup>
            </form>
            </Paper>
        </Grid>
    </Grid>
    );
}
export default FileUploader;