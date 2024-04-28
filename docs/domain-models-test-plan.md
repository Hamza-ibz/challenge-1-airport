# Domain Models and Test Plan

## Task 1

### Problems and Benefits 
 The Software is solving the problems of inefficient traffic management at an airport. Without this software, airports may experience traffic jams, leading to delays and even safety hazards or accidents. The software solves this by allowing air traffic controllers to direct planes to land or take off depending on airport condition such as landing space. The software will give a reliable data on the flow of planes instilling confidence into the air traffic controllers. This improves the overall efficiency and safety because it limits the number of plane landings when the airport slowly reaches maximum capacity which reduces the risk of accidents. If the airport is full, planes are not directed to land, thereby preventing traffic jams, reducing delays and improving safety. The software will be able to change its maximum capacity at the airport meaning it will be much easier to manage urgent situations. Additionally, the passengers experience will improve due to smooth landings and takeoffs managed with reliable airport operations.

### Risks
One risk is that air traffic controllers maybe over reliant on this software which is a big risk because if the software experiences downtime, it could cause confuse between air traffic controllers and pilots, leading to delays or even accidents. The software also lacks access to flight times, which means it cannot confirm whether these planes are expected arrivals. This increases the possibility of unwanted planes being directed to land.

---
## Task 2 and Task 3

### User Stories and Domain Models

#### User story 1:-
As a user of the software, <br>
I want to know the maximum capacity of planes that the airport can hold, <br>
So that i know the number of landing space available. <br>

| Object  |   Properties    |     Messages     | Output |
| :-----: | :-------------: | :--------------: | :----: |
| Airport | maxCapacity@int | getMaxCapacity() |  @Int  |

#### User story 2:-
As a user of the software, <br>
I want to adjust the capacity of planes that the airport can hold, <br>
So that i can manage the number of planes landing depending on airport condition. <br>

| Object  |   Properties    |       Messages       | Output  |
| :-----: | :-------------: | :------------------: | :-----: |
| Airport | maxCapacity@int | setMaxCapacity(@int) | @String |

#### User story 3:-
As an Air Traffic Controller, <br>
I want to instruct a plane to land at the airport if the airport is not at full capacity, <br>
So that there is enough space for the plane to land passengers safely. <br>

| Object  |        Properties         |     Messages      |  Output  |
| :-----: | :-----------------------: | :---------------: | :------: |
| Airport |      maxCapacity@int      |  capacityFull()   | @Boolean |
|         | planeArray @array[@Plane] | landPlane(@Plane) | @String  |
|  Plane  |        idPlane@int        |   getIdPlane()    |  @Void   |

#### User story 4:-
As an Air Traffic Controller, <br>
I want to instruct a plane to land if the plane isn't already at the airport, <br>
So that i don't cause confusion by instructing a landed plane to land again. <br>

| Object  |        Properties         |     Messages      | Output  |
| :-----: | :-----------------------: | :---------------: | :-----: |
| Airport | planeArray @array[@Plane] | landPlane(@Plane) | @String |
|  Plane  |        idPlane@int        |   getIdPlane()    |  @Void  |

#### User story 5:-
As an Air Traffic Controller, <br>
I want to instruct a plane to take off from an airport as long as it is currently at the airport, <br>
So that the plane can leave safely. <br>

| Object  |        Properties         |       Messages       | Output  |
| :-----: | :-----------------------: | :------------------: | :-----: |
| Airport | planeArray @array[@Plane] | planeTakeOff(@Plane) | @String |
|  Plane  |        idPlane@int        |     getIdPlane()     |  @Void  |

### Kanban Board
<img src="kanban-board-start.png" width="200" style="display: block; margin: 0 auto" />
<img src="kanban-board-US1-in-progress.png" width="200" style="display: block; margin: 0 auto"/>
<img src="kanban-board-US1-complete-US2-in-progress.png" width="200" style="display: block; margin: 0 auto"/>
<img src="kanban-board-US2-complete-US3-in-progress.png" width="200" style="display: block; margin: 0 auto"/>
<img src="kanban-board-US3-complete-US4-in-progress.png" width="200" style="display: block; margin: 0 auto"/>
<img src="kanban-board-US4-complete-US5-in-progress.png" width="200" style="display: block; margin: 0 auto"/>
<img src="kanban-board-complete.png" width="200" style="display: block; margin: 0 auto"/>