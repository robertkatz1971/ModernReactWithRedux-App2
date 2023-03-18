import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const ADD_TO_COUNT = 'add-to-count';
const CHANGE_VALUE_TO_ADD= 'change-value-to-add';

const reducer = ( state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return  {
                ...state, 
                count: state.count + 1
            };
        case DECREMENT_COUNT:
            return  {
                ...state, 
                count: state.count - 1
            };
        case ADD_TO_COUNT:
            return {
                ...state, 
                count: (state.count + state.valueToAdd), 
                valueToAdd: 0
            };
        case CHANGE_VALUE_TO_ADD:
            return {
                ...state, 
                valueToAdd: action.payload
            };
        default:
            return state;
    }
};

const CounterPager = ({initialCount}) => {

    const [ state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const handleInputChange = (event) => {   
        dispatch({
            type: CHANGE_VALUE_TO_ADD,
            payload: parseInt(event.target.value) || 0
        })
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_TO_COUNT,
        });
    };

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT,
        });  
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        }); 
    };

    return (
        <Panel className={'m-3'}>
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment} primary>Increment</Button>
                <Button onClick={decrement} primary>Decrement</Button>
            </div>

            <form onSubmit={handleButtonClick}>
                <label>Add a lot</label>
                <input 
                    type='number' 
                    className='p-1 m-3 bg-gray-50 border border0-gray-300' 
                    value={state.valueToAdd || ""} 
                    onChange={handleInputChange}
                />
                <Button primary>Add it!</Button>
            </form>
        </Panel>
    )
};

export default CounterPager;

