import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

const CounterPager = ({initialCount}) => {

    const { count, increment } = useCounter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={() => increment()} primary>Increment</Button>
        </div>
    )
};

export default CounterPager;

