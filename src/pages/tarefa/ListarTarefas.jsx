import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 90,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'tituloTarefa',
    headerName: 'Título',
    width: 150,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'descricaoTarefa',
    headerName: 'Descrição',
    width: 200,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'inicioTarefa',
    headerName: 'Data de Início',
    width: 130,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'fimTarefa',
    headerName: 'Data de Finalização',
    width: 150,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'statusTarefa',
    headerName: 'Status',
    width: 150,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'recursoTarefa',
    headerName: 'Recurso',
    width: 110,
    editable: true,
    headerAlign: 'center',
    align: 'center',
  },
];

const rows = [
  { id: 1, tituloTarefa: 'Tarefa 1', descricaoTarefa: 'Descrição da Tarefa 1', inicioTarefa: '2022-01-01', fimTarefa: '2022-01-02', statusTarefa: 'Concluída', recursoTarefa: 'Recurso 1'},
  { id: 2, tituloTarefa: 'Tarefa 2', descricaoTarefa: 'Descrição da Tarefa 2', inicioTarefa: '2022-01-03', fimTarefa: '2022-01-04', statusTarefa: 'Em andamento', recursoTarefa: 'Recurso 2'},
  { id: 3, tituloTarefa: 'Tarefa 3', descricaoTarefa: 'Descrição da Tarefa 3', inicioTarefa: '2022-01-04', fimTarefa: '2022-01-05', statusTarefa: 'Em andamento', recursoTarefa: 'Recurso 3'},
  { id: 4, tituloTarefa: 'Tarefa 4', descricaoTarefa: 'Descrição da Tarefa 4', inicioTarefa: '2022-01-05', fimTarefa: '2022-01-06', statusTarefa: 'Em andamento', recursoTarefa: 'Recurso 4'},
  { id: 5, tituloTarefa: 'Tarefa 5', descricaoTarefa: 'Descrição da Tarefa 5', inicioTarefa: '2022-01-06', fimTarefa: '2022-01-07', statusTarefa: 'Em andamento', recursoTarefa: 'Recurso 5'},
  { id: 6, tituloTarefa: 'Tarefa 6', descricaoTarefa: 'Descrição da Tarefa 6', inicioTarefa: '2022-01-07', fimTarefa: '2022-01-08', statusTarefa: 'Aguardando', recursoTarefa: 'Recurso 6'},
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
