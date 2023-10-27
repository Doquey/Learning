## c++ Project structure.

In c++ projects we can use something similar to react components and pythons utils. We can define all classes and structs(which are data structures that lets us create data objects schemas).

The classes and other components go inside files called headers. These headers will included in our main file the normal way, just like we do in python. Though You notice
that in c++ we cannot say where the library is when including it. Look:

                            #include "DataPipeline.h"
                            #include "DataFrame.h"
                            #include "RTSPStreamReceiver.h"
                            #include "LetterboxResizer.h"
                            #include "FaceDetectionComponent.h"
                            #include "DetectionInPolygon.h"
                            #include "APIPublisher.h"
Therefore to make sure that our executables know where our libraries are we need to pass the destination of every library when calling g++, so that it will link that directory to that library.
This is very impratical when we have a lot of libraries and components. Therefore people created the cmake, that will basically do that for us.

## CMAKE

To use Cmake to compile our code we will a makelist and include our project name and all the packages and libraries in there, as well as link the libraries that we use to that
executable.( Here we pass the directory to the libraries(folders) that contain the .h files and this way, whenever we "build" or compile our c++ code using cmake and this makefile,
it will automatically generate an executable for us that has all the libraries and components linked to the main source code.

After Cmake has created the build files for us (compiled the main source code) then we can install the app and run the executable.
