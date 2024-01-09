# Daemons aree programs that are built to execute in the background of a main program.

    Daemon Threads:
        Daemon threads are threads that run in the background and are subordinate to the main thread.
        They are set as daemons using the setDaemon(True) method before starting the thread.
        If the main program exits, all daemon threads are terminated, and the program exits.
        Daemon threads are typically used for background tasks that should be stopped when the program exits.

    Normal Threads:
        Normal (non-daemon) threads are threads that continue to run even if the main program has finished executing.
        They do not depend on the main thread and will continue running until they complete their tasks or are explicitly stopped.
        If the main thread exits, it does not affect the existence or execution of normal threads.
