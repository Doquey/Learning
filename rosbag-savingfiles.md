# This is the process of getting a .bag file, publishing it to the main topic, and then reading it using another subscriber topic and saving its messages accordingly.

## First we need to get the ros docker image for our ubuntu:

- Go to docker hub ros
- go to tags
- search for ros-noetic-core

## after that we need to run the image normally

## After running the image, we'll need to install the build_essentials for cmake to work properly:

- apt-get update && apt-get upgrade
- apt-get install build-essential

## Then just run:

-catkin_make inside the working directory (usually catkin_ws)

## After that we need to build-up our nodes(which in our case is going to be python files)

## Having the nodes we can run our rosbag package:


- rosbag play file.bag

## We can check out what is being published:

-rostopic echo /topic/we/are/publishing/to   (can gather this from rosbag info file.bag)


## And run our subscriber node to the underlying topic the bag is publishing to.
