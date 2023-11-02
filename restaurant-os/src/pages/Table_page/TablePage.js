import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton'; // Import the CircleButton component
import './TablePage.css';

const customBackgroundStyle = {
    backgroundColor: '#fff5ee', 
};

function TablePage() {
    return (
        <div>
            <div className="button-container" style={customBackgroundStyle}>
                <div className="button-column">
                    &nbsp;
                    <CircleButton>Table 1</CircleButton>
                    &nbsp;
                    <CircleButton>Table 2</CircleButton>
                    &nbsp;
                    <CircleButton>Table 3</CircleButton>
                    &nbsp;
                    <CircleButton>Table 4</CircleButton>
                    &nbsp;
                    <CircleButton>Table 5</CircleButton>
                    &nbsp;
                    <CircleButton>Table 6</CircleButton>
                    &nbsp;
                    <CircleButton>Table 7</CircleButton>
                    &nbsp;
                    <CircleButton>Table 8</CircleButton>
                    &nbsp;
                </div>
                <div className="button-column">
                &nbsp;
                    <CircleButton>Table 9</CircleButton>
                    &nbsp;
                    <CircleButton>Table 10</CircleButton>
                    &nbsp;
                    <CircleButton>Table 11</CircleButton>
                    &nbsp;
                    <CircleButton>Table 12</CircleButton>
                    &nbsp;
                    <CircleButton>Table 13</CircleButton>
                    &nbsp;
                    <CircleButton>Table 14</CircleButton>
                    &nbsp;
                    <CircleButton>Table 15</CircleButton>
                    &nbsp;
                    <CircleButton>Table 16</CircleButton>
                    &nbsp;
                </div>
                <div className="button-column">
                &nbsp;
                    <CircleButton>Table 17</CircleButton>
                    &nbsp;
                    <CircleButton>Table 18</CircleButton>
                    &nbsp;
                    <CircleButton>Table 19</CircleButton>
                    &nbsp;
                    <CircleButton>Table 20</CircleButton>
                    &nbsp;
                    <CircleButton>Table 21</CircleButton>
                    &nbsp;
                    <CircleButton>Table 22</CircleButton>
                    &nbsp;
                    <CircleButton>Table 23</CircleButton>
                    &nbsp;
                    <CircleButton>Table 24</CircleButton>
                    &nbsp;
                </div>
                <div className="button-column">
                &nbsp;
                    <CircleButton>Table 25</CircleButton>
                    &nbsp;
                    <CircleButton>Table 26</CircleButton>
                    &nbsp;
                    <CircleButton>Table 27</CircleButton>
                    &nbsp;
                    <CircleButton>Table 28</CircleButton>
                    &nbsp;
                    <CircleButton>Table 29</CircleButton>
                    &nbsp;
                    <CircleButton>Table 30</CircleButton>
                    &nbsp;
                    <CircleButton>Table 31</CircleButton>
                    &nbsp;
                    <CircleButton>Table 32</CircleButton>
                    &nbsp;
                </div>
            </div>
        </div>
    );
}

export default TablePage;