import React, { useReducer, useState } from 'react'
import { ADD_EVENT } from '../actions/index'
import reducer from '../reducers/index'
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap'
import './ToDomain.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDomain = () => {

    const [state, dispatch] = useReducer(reducer, []);
    const [dating, setDating] = useState('');
    const [product, setProduct] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_EVENT,
            dating,
            product
        });
        setDating('');
        setProduct('');
    }

    return (
        <div>
            <div className='headder'>
                <h1>万</h1>
                <h3>在庫状況</h3>
            </div>
            <div className='main'>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="入庫No"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        type='text'
                        placeholder="日付"
                        value={dating}
                        onChange={(e) => setDating(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        type='text'
                        placeholder="商品名"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="状況"
                    />
                </InputGroup>
            </div>
            <div className='mainItem'>
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={handleClick}
                >
                    登録
                </Button>
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={handleClick}
                >
                    検索
                </Button>
            </div>
            <div className='mainTable'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>入庫No.</th>
                            <th>日付</th>
                            <th>商品名</th>
                            <th>ステータス</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.dating}</td>
                                    <td>{data.product}</td>
                                    <td>
                                        <Button>在</Button>
                                        <Button>出</Button>
                                        <Button>完</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ToDomain
