import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoIosAddCircle } from "react-icons/io";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { getAllblogs } from "../blog/servis";
import { index } from "drizzle-orm/gel-core";
import { deletekategori, getAllKategoris } from "./servis";
import DeleteButton from "./delete";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default async function BasicTable() {
  const data = await getAllKategoris()
  return (
    <TableContainer component={Paper}>
      <div
        className="flex justify-between items-center"
        style={{ padding: 30 }}
      >
        <h1 className="font-bold text-3xl mb-6">Kategori</h1>
        <Link href="/admin/kategori/tambah" className="hover:text-gray-300">
          <Button
            style={{ height: 40, width: 151 }}
            className="bg-blue-500 text-white flex justify-center items-center"
          >
            <IoIosAddCircle style={{ scale: 1.5, marginRight: 10 }} />
            Tambah Kategori
          </Button>
        </Link>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="left">Nama</TableCell>
            <TableCell align="left">deskripsi</TableCell>
            <TableCell align="left">aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{row.nama}</TableCell>
              <TableCell align="left">{row.deskripsi}</TableCell>
              <TableCell align="left">
                <Link href={`/admin/kategori/${row.id}`} className="mx-3">edit</Link>
                <form action={deletekategori}>
                  <input name="id" value={row.id} type="hidden" />
                  <DeleteButton />
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
