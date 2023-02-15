import { Avatar, Button } from 'antd';
import React from 'react';
import Container from './Container';
import './Footer.css'

const Footer = (props) => (
    <div className='footer'>
        <Container>
            {props.numberOfStudents ? 
                <Avatar 
                    style={{backgroundColor: '#f56a00', marginRight: '5px'}}
                    size='large'>{props.numberOfStudents}</Avatar> : null
            }
            <Button type='primary'>
                Add New student +
            </Button>
        </Container>
    </div>
)

export default Footer;