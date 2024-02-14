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

example:

```
#!/usr/bin/env python3

import rospy
from sensor_msgs.msg import PointCloud2
import sensor_msgs.point_cloud2 as pc2
import datetime 
import os

class LidarXYZSaver:
    def __init__(self):
        rospy.init_node('lidar_xyz_saver_node', anonymous=True)
        rospy.Subscriber('/livox/lidar', PointCloud2, self.lidar_callback)

    def lidar_callback(self, msg):
        points = pc2.read_points(msg, field_names=("x", "y", "z"), skip_nans=True)
        BASE_DIR = os.getcwd() + "/data/"
        filename = self.get_filename()
        with open(BASE_DIR + filename, 'w') as f:
            for point in points:
                f.write(f"{point[0]} {point[1]} {point[2]}\n")
        rospy.loginfo(f"Saved lidar data to {filename}")

    def get_filename(self):
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        file_name = "lidar_data{}.xyz".format(timestamp)
        return file_name



if __name__ == '__main__':
    try:
        LidarXYZSaver()
        rospy.spin()
    except rospy.ROSInterruptException:
        pass

```
