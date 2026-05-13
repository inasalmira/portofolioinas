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
import { deleteWorks, getAllworks } from "./servis";
import FormatDate from "./componen";
import DeleteButton from "./delete";



export default async function BasicTable() {
  const data = await getAllworks();
  return (
    <TableContainer component={Paper}>
      <div
        className="flex justify-between items-center"
        style={{ padding: 30 }}
      >
        <h1 className="font-bold text-3xl mb-6">Works</h1>
        <Link href="/admin/works/tambah" className="hover:text-gray-300">
          <Button
            style={{ height: 40, width: 150 }}
            className="bg-blue-500 text-white flex justify-center items-center"
          >
            <IoIosAddCircle style={{ scale: 1.5, marginRight: 10 }} />
            Tambah Works
          </Button>
        </Link>
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="left">Judul</TableCell>
            <TableCell align="left">Tanggal</TableCell>
            <TableCell align="left">Deskripsi</TableCell>
            <TableCell align="left">Gambar</TableCell>
            <TableCell align="left">Kategori</TableCell>
            <TableCell align="left">Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.judul}
              </TableCell>
              <TableCell>
                <FormatDate date={row.created_at} />
              </TableCell>
              <TableCell align="left">{row.isi}</TableCell>
              <TableCell align="left">
                {row.gambar ? (
                  <img
                    src={row.gambar}
                    alt={row.judul}
                    width={80}
                    className="rounded"
                  />
                ) : (
                  "Tidak ada gambar"
                )}
              </TableCell>
              <TableCell align="left">{row.kategori}</TableCell>
              <TableCell align="left">
                <Link href={`/admin/works/${row.id}`} className="mx-3">
                  {" "}
                  edit
                </Link>
                <form action={deleteWorks}>
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
    