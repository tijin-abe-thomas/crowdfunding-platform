import { FC, ChangeEvent, useState } from "react";
import { format } from "date-fns";
import numeral from "numeral";
import * as React from "react";
import PropTypes from "prop-types";
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
} from "@mui/material";

import Label from "@/components/Label";
import { CryptoOrder, CryptoOrderStatus } from "@/models/crypto_order";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import BulkActions from "./BulkActions";

// interface RecentOrdersTableProps {
//   className?: string;
//   cryptoOrders: CryptoOrder[];
// }

// interface Filters {
//   status?: CryptoOrderStatus;
// }

// const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
//   const map = {
//     failed: {
//       text: 'Failed',
//       color: 'error'
//     },
//     completed: {
//       text: 'Completed',
//       color: 'success'
//     },
//     pending: {
//       text: 'Pending',
//       color: 'warning'
//     }
//   };

//   const { text, color }: any = map[cryptoOrderStatus];

//   return <Label color={color}>{text}</Label>;
// };

// const applyPagination = (
//   cryptoOrders: CryptoOrder[],
//   page: number,
//   limit: number
// ): CryptoOrder[] => {
//   console.log(cryptoOrders)
//   return cryptoOrders.slice(page * limit, page * limit + limit);
// };

const RecentOrdersTable = ({ cryptoOrders, account, balance }) => {
  // const applyFilters = (
  //   cryptoOrders: CryptoOrder[],
  //   filters: Filters
  // ): CryptoOrder[] => {
  //   return cryptoOrders.filter((cryptoOrder) => {
  //     let matches = true;

  //     if (filters.status && cryptoOrder.status !== filters.status) {
  //       matches = false;
  //     }

  //     return matches;
  //   });
  // };

  // const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
  //   []
  // );
  // const selectedBulkActions = selectedCryptoOrders.length > 0;
  // const [page, setPage] = useState<number>(0);
  // const [limit, setLimit] = useState<number>(5);
  // const [filters, setFilters] = useState<Filters>({
  //   status: null
  // });

  // const statusOptions = [
  //   {
  //     id: 'all',
  //     name: 'All'
  //   },
  //   {
  //     id: 'completed',
  //     name: 'Completed'
  //   },
  //   {
  //     id: 'pending',
  //     name: 'Pending'
  //   },
  //   {
  //     id: 'failed',
  //     name: 'Failed'
  //   }
  // ];

  // const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   let value = null;

  //   if (e.target.value !== 'all') {
  //     value = e.target.value;
  //   }

  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     status: value
  //   }));
  // };

  // const handleSelectAllCryptoOrders = (
  //   event: ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setSelectedCryptoOrders(
  //     event.target.checked
  //       ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
  //       : []
  //   );
  // };

  // const handleSelectOneCryptoOrder = (
  //   _event: ChangeEvent<HTMLInputElement>,
  //   cryptoOrderId: string
  // ): void => {
  //   if (!selectedCryptoOrders.includes(cryptoOrderId)) {
  //     setSelectedCryptoOrders((prevSelected) => [
  //       ...prevSelected,
  //       cryptoOrderId
  //     ]);
  //   } else {
  //     setSelectedCryptoOrders((prevSelected) =>
  //       prevSelected.filter((id) => id !== cryptoOrderId)
  //     );
  //   }
  // };

  // const handlePageChange = (_event: any, newPage: number): void => {
  //   setPage(newPage);
  // };

  // const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setLimit(parseInt(event.target.value));
  // };

  // const filteredCryptoOrders = applyFilters(cryptoOrders, filters);

  // const paginatedCryptoOrders = applyPagination(
  //   filteredCryptoOrders,
  //   page,
  //   limit
  // );
  // const selectedSomeCryptoOrders =
  //   selectedCryptoOrders.length > 0 &&
  //   selectedCryptoOrders.length < cryptoOrders.length;
  // const selectedAllCryptoOrders =
  //   selectedCryptoOrders.length === cryptoOrders.length;
  const theme = useTheme();

  return (
    <Card>
      {/* {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )} */}
      {/* { 
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Recent Orders"
        />
      }
      <Divider /> */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cmpgn ID</TableCell>
              <TableCell>Campaign Details</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptoOrders.map((cryptoOrder, index) => (
              <TableRow
                hover
                key={index}
                // selected={isCryptoOrderSelected}
              >
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    gutterBottom
                    noWrap
                  >
                    {cryptoOrder.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    gutterBottom
                    noWrap
                  >
                    {cryptoOrder.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {cryptoOrder.description.slice(0, 50)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    gutterBottom
                    noWrap
                  >
                    {account.slice(0, 5) + "..." + account.slice(25, 30)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {balance.slice(0, 11)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    gutterBottom
                    noWrap
                  >
                    {cryptoOrder.amountCrypto}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    gutterBottom
                    noWrap
                  >
                    {cryptoOrder.amountCrypto}
                  </Typography>
                </TableCell>
                <TableCell>
                  {cryptoOrder.status && (
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.status}
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        {/* <TablePagination
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        /> */}
      </Box>
    </Card>
  );
};

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired,
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: [],
};

export default RecentOrdersTable;
