import React from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDomain = () => {
    return (
        <div>
            <div className='headder'>
                <h1>万</h1>
                <h3>在庫管理</h3>
            </div>
            <div className='main'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>日付</th>
                            <th>入庫No.</th>
                            <th>商品名</th>
                            <th>ステータス</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ToDomain
