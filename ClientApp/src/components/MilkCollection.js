import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DataGrid } from '@material-ui/data-grid'

import { getFarmersList} from '../actions/listAction'


class DailyWorkSheet extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            dws: {
                dated: new Date().toLocaleDateString(),
                morning: {
                    FromTime: new Date().toLocaleTimeString(),
                    ToTime: new Date().toLocaleTimeString(),
                },
                evening: {
                    eFromTime: new Date().toLocaleTimeString()
                },
                milkData: [
                    { id: "", farmer: "", qty: "", fat: "", snf: "", clr: "", mbrt: "", water: "", sugar: "", salt: "", temp: "", rate: "", remarks: "" }
                ]
            },
            employee: [
                { id: "0001", name: "emp1" }, { id:"0002", name: "emp2" }, { id: "0003", name: "emp3" }, { id:"0004", name: "emp4" }
            ],
            farmer: [
                { id: "0001", name: "frm1" }, { id: "0002", name: "frm2" }, { id: "0003", name: "frm3" }, { id: "0004", name: "frm4" }
            ],
            milkRate: [
                { fat: "1", snf: "2", rate: "10" }, { fat: "2", snf: "3", rate: "30" }, { fat: "4", snf: "3", rate: "40" }, { fat: "3", snf: "6", rate: "52" }
            ]
        }
    }   
    componentDidMount() {
        this.setState({
            dws: {
                dated: new Date().toLocaleDateString(),
                morning: {
                    FromTime: new Date().toLocaleTimeString(),
                    ToTime: new Date().toLocaleTimeString(),
                },
                evening: {
                    eFromTime: new Date().toLocaleTimeString()
                }
            }
        })
        this.dispatchGetFarmersList();
    }
    dispatchGetFarmersList = () => {
        this.props.dispatch(getFarmersList()); 
    }
    render() {
        console.log(this.state.dws.milkData);
        const columns = [
            { field: 'id', headerName: 'ID', width: 90 },
            {
                field: 'farmer',
                headerName: 'Farmer Name',
                width: 150,
                editable: false,
            },
            {
                field: 'qty',
                headerName: 'Quantity',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'fat',
                headerName: 'FAT',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'snf',
                headerName: 'SNF',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'clr',
                headerName: 'CLR',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'mbrt',
                headerName: 'MBRT',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'water',
                headerName: 'Water',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'sugar',
                headerName: 'Sugar',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'salt',
                headerName: 'Salt',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'temp',
                headerName: 'Temp',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'rate',
                headerName: 'Rate',
                width: 150,
                type: 'number',
                editable: true,
            },
            {
                field: 'remarks',
                headerName: 'Remark',
                width: 150,
                type: 'number',
                editable: true,
            },
        ];
        const columns1 = [
            { field: 'id', headerName: 'ID', width: 90 },
            {
                field: 'firstName',
                headerName: 'First name',
                width: 150,
                editable: true,
            },
            {
                field: 'lastName',
                headerName: 'Last name',
                width: 150,
                editable: true,
            },
            {
                field: 'age',
                headerName: 'Age',
                type: 'number',
                width: 110,
                editable: true,
            },
            {
                field: 'fullName',
                headerName: 'Full name',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 160,
                valueGetter: (params) =>
                    `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
                    }`,
            },
        ];
        const rows = [
            { id: "1", farmer: "hari", qty: "123", fat: "12", snf: "23", clr: "123", mbrt: "success", water: "2", sugar: "1", salt: "4", temp: "31", rate: "65", remarks: "sfsd" }
        ];
        return (
            <Grid container >
                <Grid item xs={12} >
                    <Paper   variant="outlined">
                       
                        <Grid Item xs={12} >
                                <FormGroup row>
                                <Grid Item xs={3} spacing={1}>
                                    <TextField
                                        id="dwsDate"
                                        label="Dated"
                                        type="date"
                                        fullWidth
                                        defaultValue={this.state.dws.dated}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                    </Grid> 
                                </FormGroup>
                            </Grid> 
                    </Paper>
                    <Paper>
                        <Grid container>
                            <Grid Item xs={12}>
                                <Typography variant="h6">Raw Milk Collection</Typography>
                                <Grid Item xs={12} >
                                    <FormGroup row>
                                        <Grid Item xs={3} spacing={1}>
                                            <FormControl fullWidth spacing={5} >
                                            <InputLabel id="demo-simple-select-label">Slot</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                    id="demo-simple-select" 
                                            >
                                                <MenuItem value={10}>Select</MenuItem>
                                                <MenuItem value={20}>Morning</MenuItem>
                                                <MenuItem value={30}>Evening</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mCollectionfrom"
                                                label="Collection time From"
                                                type="time"
                                                fullWidth
                                                defaultValue={this.state.dws.morning.FromTime}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={4}>
                                            <TextField
                                                id="mCollectionfrom"
                                                label="Collection time end"
                                                type="time"
                                                fullWidth
                                                defaultValue={this.state.dws.morning.ToTime}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}> 
                                                <Autocomplete
                                                    id="cmbCollectedBy"
                                                    options={this.state.employee}
                                                getOptionLabel={(option) => option.name}
                                                fullWidth
                                                    renderInput={(params) => <TextField {...params} label="Collected By"   />}
                                                />
                                             
                                        </Grid>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Grid Item xs={3} spacing={1}>
                                            <Autocomplete
                                                id="cmbVehicle"
                                                options={this.state.employee}
                                                getOptionLabel={(option) => option.name}
                                                fullWidth
                                                renderInput={(params) => <TextField {...params} label="Vehicle"  />}
                                            />

                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mStartOdo"
                                                label="Start Odometer"
                                                type="numeric"
                                                fullWidth
                                                defaultValue=""
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mEndOdo"
                                                label="End Odometer"
                                                 type="numeric"
                                                fullWidth
                                                defaultValue=""
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Grid Item xs={12} >
                                            <Typography variant="h8">Raw Milk Details</Typography>
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            {console.log("farmerlist",this.props.farmersList)}
                                            {/*<Autocomplete*/}
                                            {/*    id="cmbFarmer"*/}
                                            {/*    options={this.props.farmersList}*/}
                                            {/*    getOptionLabel={(option) => option.Name}*/}
                                            {/*    fullWidth*/}
                                            {/*    renderInput={(params) => <TextField {...params} label="Farmer" />}*/}
                                            {/*/>*/}

                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mQty"
                                                label="Quantity"
                                                type="numeric"
                                                fullWidth
                                                defaultValue="0.00"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <Autocomplete
                                                id="cmbFat"
                                                options={this.state.milkRate}
                                                getOptionLabel={(option) => option.fat}
                                                fullWidth
                                                renderInput={(params) => <TextField {...params} label="Fat" />}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <Autocomplete
                                                id="cmbSNF"
                                                options={this.state.milkRate}
                                                getOptionLabel={(option) => option.snf}
                                                fullWidth
                                                renderInput={(params) => <TextField {...params} label="SNF"/>}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mCLR"
                                                label="Quantity"
                                                type="numeric"
                                                fullWidth
                                                defaultValue="0.00"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mWater"
                                                label="Water"
                                                type="numeric"
                                                fullWidth
                                                defaultValue="0.00"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mSugar"
                                                label="Sugar"
                                                type="numeric"
                                                fullWidth
                                                defaultValue="0.00"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mSalt"
                                                label="Salt"
                                                type="numeric"
                                                fullWidth
                                                defaultValue="0.00"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mTemp"
                                                label="Tempature"
                                                type="numeric"
                                                fullWidth
                                                defaultValue="0.00"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mRate"
                                                label="Rate"
                                                type="numeric"
                                                fullWidth
                                                defaultValue="0.00"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mTotal"
                                                label="Total"
                                                type="numeric"
                                                fullWidth
                                                defaultValue="0.00"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid Item xs={3} spacing={1}>
                                            <TextField
                                                id="mRemark"
                                                label="Remarks"
                                                type="text"
                                                fullWidth
                                                defaultValue=""
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                    </FormGroup>
                                    <FormGroup>
                                        <Grid Item xs={12} >
                                        <div style={{ height: 400, width: '100%' }}>
                                                <DataGrid
                                                    rows={rows}
                                                    columns={columns}
                                                    pageSize={5}
                                                    rowsPerPageOptions={[5]}
                                                    checkboxSelection
                                                    disableSelectionOnClick
                                                />
                                         </div>
                                         </Grid>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
};
function mapStateToProps(state) {
    console.log("state", state);
    return {
        farmersList: state.farmersList 
    };
};
export default connect(mapStateToProps)(DailyWorkSheet)
