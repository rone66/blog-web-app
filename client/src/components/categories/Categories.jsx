import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { categories } from "../../constants/data";
import styled from "@emotion/styled";
import { Link, useSearchParams } from "react-router-dom";

const StyleTable=styled(Table)`
    border:1px solid rgba(224,224,224,1);
    font-size:16px;

`   
const StyleButton=styled(Button)`
    margin:20px;
    width:80%;
    background:#614BC3;
    color:#ffff;

`
const StyleLink=styled(Link)`
    text-decoration:none;
    color:inherit;

`
const Categories = () => {
    const [searchParams]=useSearchParams();
    const category= searchParams.get('category');
    //console.log(category);
  return (
    <>
    <StyleLink to={`/create?category=${category || ''}`} style={{textDecoration:'none'}}>
    <StyleButton variant="contained">Create Blog</StyleButton>
    </StyleLink>
   
    <StyleTable>
        <TableHead>
            <TableRow>
                <TableCell>
                    <StyleLink to="/">
                        All Categories
                    </StyleLink>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                categories.map(category=>(
                    <TableRow key={category.id}>
                        <TableCell>
                            <StyleLink to={`/?category=${category.type}`}>
                            {category.type}
                            </StyleLink>
                        </TableCell>
                    </TableRow>
                ))
            
            }
        </TableBody>
    </StyleTable>
    
    </>
  )
}

export default Categories;