# ROS(Robot Operating System)

- What is ROS
- File system tools

## What is ROS

ROS is a collection of software frameworks to develope robots.

It works pretty much like a operating system. It has its own setup.sh command that needs to be sourced and run togather with the bash normal commandline.

Packages are the software organization unit of ROS code. Each package can contain libraries,executables, scripts, or other artifacts.

manifests are descriptions of a package. It works like a package.json file in a node project.

## File system tools

The ros code is spread across many packages. Therefore the developers built a set of specific-to-ros tools that help us navigate the file system more comfortably.

- rospack find [package_name] -> the rospack lets us get info about a package. In this case it will show us the path to that package.

- roscd <package-or-stack> -> this will change our directory directly to the package directory or to the stack. roscd can also move to a subdirectory of a package : roscd <package>[/subdirectory]

- roscd log -> this will take me to the folder ROS keeps its logs. If I haven't run any ROS program yet(which I havent) then this will give back an error.

- rosls <package-or-stack>[/subdir] -> this allows us to ls directly in the package directory without needing to use its path.

- Tab Completition -> we can use this as we do with the normal linux bash. We can do tab twice to see all the packages that start with that part of text we've written so far. Its also used to see all the packages we have installed in the ROS enviroment we have: rosls tab tab...

## Package creation

We should always create our packages inside the src folder in the catkin workspace we created for the project.

To create a package we use the following command:
catkin_create_pkg {packagename(Can't be capitalized)} rospy(I will be coding in python therefore thats why rospy) std_msgs

source /home/luis/catkin_ws/devel/setup.bash

Each file must have its own folder. After we create the package it will be started inside a folder with its name...

To check what are the dependencies of each package we can do :
rospack depends1(first-order-dependencies) package_name

We can actually do this dependency check step for every ROS package. Since every ROS packages has its own dependencies, and the package we created uses some of these packages as first-order dependencies, we can have rospack list all dependencies of our package, direct and indirect(dependencies of the dependencies).

rospack depends {package} -> this will list all the dependencies of the {package} and the dependencies of its dependencies...

## Customizing the our package

After we run the catkin_create_pkg command, it'll create some files for us. We can then go inside these files and change them so that they will fit our package requirements.

Customizing the package.xml file:
description tag -> here we can change the description of our package.
maintainer tag -> here we can change who is the person behind this package.
license tag -> we can change this to have a code license we want. Usually BSD.

    depedencies tag -> This is where our dependencies will be listed out in some categories : build_depend, buildtool_depend, exec_depend, test_depend. When we created the package all the dependencies where placed in the document as a build_depend tag. But we want them to also be exec_depend, because we want them to run whenever our package is run.

## Building a ROS package

    catkin_make

## ROS Nodes

- Node -> A node really isn't much more than an executable file within a ROS package. ROS nodes use a ROS client library to communicate with other nodes. Nodes can publish or subscribe to a Topic. Nodes can also provide or use a Service

- Messages -> ROS data type used when subscribing or publishing to a topic.
- Topics -> Nodes can publish messages to a topic as well as subscribe to a topic to receive messages.

- Client Libraries -> ROS client libraries allow nodes written in different programming languages to communicate, examples : rospy, roscpp

- roscore -> the first thing I should ran when using ROS, this is the node responsable for showing logs about the other nodes.

- rosnode list -> lets us see what nodes are currently running.

- rosnode info/{node} -> this will return information about the node

- rosrun {package_name} {node_name} -> since nodes are nothing but files inside packages, we can run a file inside a package, run a node, doing this command.

- rosrun {package_name} {node_name} \_\_name:=new_name -> this will change the node name in running time.

- rosnode ping {node} -> this can be used to see if the node is running.

## Ros topics

Topic is a way files(nodes) use to communicate with each other in the ROS enviroment. After we have two nodes running and both those nodes "subscribe" to one specific topic. Then one node can "publish" to that topic and the other can read and apply the information.

We can use the rqt_graph node to show us what nodes are running and how they relate to each other. It basically shows us what is going on in the system. We can also use rqt_plot to show plot information being published on the topics we want.

The rostopic toll is very similar to the rosnode, as it lets us gather information about a certain topic we're running.

- rostopic -h -> will show us the available commands.
- rostopic echo {topic} -> this will print the data published on a topic.

to find out what sub-commands a rostopic command needs, we can do rostopic command -h.

- rostopic list -> this will list all the topics currently subscribed to and published.

        A node that receives data from a topic is called a subscriber, whereas one that sends data to a topic is called a publisher.

        in this command therewill be the topics and how many of each (subscribers and publishers) they have.

- rostopic pub {topic} {msg_type} {args} -> this lets us make a forced publish to a certain topic. (We can place a -1 in front of the {topic} so only one message will be published)

- rostopic pub -r -1 {topic} {msg_type} {args} -> this will continuosly make publishes to the topic, one at a time.

## Ros Messages

For the subscriber and the publisher to communicate through the same topic, they must send and receive the same data type. this means that a topic type is determined by the message type send to it. To check a topic type we can use :

- rostopic type {topic}

we can then look at the details of the message type, by using:

-rosmsg show type

## writing a publisher

We roscd to the package. Then we create a folder called "scripts". Inside this folder we'll write our python code. The breakdown of the code is in the tutorial. To set a node as a publisher we import the rospy.Publisher and we build the node using it.

## Rosbag
We can use this as a file recorder. After we have recorded a file using rosbag, we'll have the working of that node for a specific period of time. Lets say we have a lidar running on a node called lidar/something, then we start recording this node using rosbag record node, then we'll have a .bag file, which can in turn be used to convey the information present in the file to any subscriber node that we wish.

To gather information about a .bag file we can:


```
 rosbag info rua_do_escritorio.bag 
```

## Running ROS with python3 : https://www.youtube.com/watch?v=gWksWW5UgS4

