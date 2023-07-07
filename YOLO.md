# Explanation of how YOLO works
- Basics of the algorithm
- how to use it

## Basics of the algorithm
The main principle behind the YOLO algorithm is the fact that it breaks the image into a set of small chunks, and treats each chunk as
a separate image. This fact allows YOLO to have a very robust approach to object detection,since it will make prediction in everyone of those chunks
not only in the entire image, but it will search for the object in the entire universe of chunks for that image. If it happens to predict more than one bounding box inside a chunk
it will then use IOU and max pooling to eliminate the bouding boxes that have a smaller IOU with the label.

## How to use it

To use the YOLO algorithm I can just download one of them from the torch.hub repository and run it on my machine.
