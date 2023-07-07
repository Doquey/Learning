# *Sort-tracking algorithm summarization*

### I will be summarizing how the algorithm works and how we can do tracking on a video with it. Bellow are the steps the algorithm uses to get to tracking.

- Detection
- Estimation
- Target Association
- Track identify life cycle

## Detection

### Overview of detection techniques

The main technique used to do the object detection part is YOLO.
But why is it important to have an Object detection algorithm? 
Because in each frame we'll need to have a true detection, that will come from this algorithm and a estimated poze for the bounding box of the object that will come from the kalman filter. Therefore this first part of the algorithm will be used later on to be a comparison standard and also to give the linear velocity model of the kalman filter some information.


## Estimation

### Estimation models
To make the estimations in this algorithm we use the Kalman filter. The way the estimations work is as: 
We pass an detection to the kalman filter, we'll then calculate the derivative of the center points of the bounding box of that detection along with the position of these points, and we'll have a linear velocity model, which consists of the velocity of the point in the image plane(combinate the 2 derivatives and we get the velocity in 2D for that point) and the initial position of the point. With these 2 informations we set up a position function using

                                              S = S0 + v0T
this equation will let us predict the position in the plane of the center point in the next frame. This prediction will then be used to make target association in the next step.

## Target Association

### Association algorithms
In this part of the cycle we receive the predicted position of the bounding box in the next frame. The Yolo algorithm that make the prediction in the begining to be passed to the estimation part, will again make another detection. This detection from the yolo algorithm will then be compared using a IOU metric with the estimated bounding box position the kalman filter gave us. If we have more than one target object, We'll use the hungarian algorithm to find a configuration that optmizes the summation of all IOU for each object. What that means is we'll fit the correct estimation to its detection.


## Track Identity Life Cycle

### Initialization
Now this is where we resume the entire algorithm. 
The first step is to make a detection of an object in a frame.
This detection will then be passed togather with some information about its bounding box to the kalman filter.
The kalman filter in its turn will output an estimation for the position of the bounding box of the object in the next frame.
In the next frame we'll again make another detection using YOLO, and we'll receive the estimated position for the bounding box of that object from the kalman filter. We'll then do target association using the hungarian algorithm and the IOU of each detection and estimation


## How to use it

The code of how to use this algorithm is in the folder of the tutorial. But basically we download a yolo from the torch.hub repository and we use the predefined algorithm the daedalus crew put togather. We just need to pass the detection of the yolo algorithm to the Sort implementation.


kalman filter : https://www.youtube.com/watch?v=bm3cwEP2nUo
How DeepSORT works : https://www.youtube.com/watch?v=LbyqsoLJu5Q&t=575s
