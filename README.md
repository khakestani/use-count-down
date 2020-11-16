# Use Count Down

A small React hook for implementing a simple count down timer.

####Example 1 : By specifying the waiting time in days, hours, minutes, seconds

```javascript
import useCountDown from 'use-count-down';

const Example = ()=>{
    const { d, h, m, s } = useCountDown('2:5:30:25'); // The timer will end in 2 days and 5 hours and 30 minutes and 25 seconds

    return (
        <h3>You can try for new code at: </h3>
        <div>{`${d}:${h}:${m}:${s}`}</div>
    )

}
```

> Can used for timer shown in resend verification code

####Example 2 : By specifying the target date object

```javascript
import useCountDown from 'use-count-down';

const Example = ()=>{
    const target = new Date('May 20, 2021 06:10:00');
    const { d, h, m, s } = useCountDown(target); // The timer will end in May 20, 2021 06:10:00

    return (
        <h3>We will be back soon in</h3>
        <div>{`${d}:${h}:${m}:${s}`}</div>
    )

}
```

> Can used for coming soon templates

Licence
MIT Licensed
