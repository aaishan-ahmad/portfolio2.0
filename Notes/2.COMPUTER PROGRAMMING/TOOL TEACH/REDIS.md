## What 
- data store in ram 

## Why 
- every refresh not fetch data from api, one time fetch data and store in ram then  every time  get data on loaded ram. 


- redis server port : 6379
- redis-cli ping  => pong
- redis-cli => ping => pong


## data type
- **string** -->  set name:1 ahsan (set <var>:<id> value)  
                   --> get name:1
                   ---> set name:1 golden nx (set name:1 golden when name:1                                                                                                              doesn't exist ) 
                    ---> mget user:1 msg:2 (use to get multiple value)




[link with tool teach](TOOL_TEACH)
