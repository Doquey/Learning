# A quick how to with SSH

## Acessing a remote server using a private key

### Place the private key, that is a txt file, inside the .ssh folder in the /home/user directory, the directory is ~/.ssh

                mv 'key_file_directory' ~/.ssh

### Now we need to change the permissions for our key so that its saffer

                chmod 600 /home/luis/.ssh/vast_ai

### Now we can acess the server

                ssh -p 21800 -i ~/.ssh/vast_ai root@ssh4.vast.ai -L 8080:localhost:8080

### We can move files from the local to the remote

                scp -P 21800 -i ~/.ssh/vast_ai seu_arquivo_local root@ssh4.vast.ai:/destino/no/remote

### We can move folders from the local to the remote

                scp -P 21800 -i ~/.ssh/vast_ai -r /seu/folder/local root@ssh4.vast.ai:/destino/no/remote

### We can move folders from the remote to the local

                scp -P 21800 -i ~/.ssh/vast_ai -r root@ssh4.vast.ai:/pasta/no/remote /pasta/no/seu/local

### We can move files from the remote to the local

                scp -P 21800 -i ~/.ssh/vast_ai -r root@ssh4.vast.ai:/arquivo/no/remote /destino/no/seu/local

### The -P 21800 is the port server the local is running.


### Using VSCODE to edit files on the ssh machine, first we need to create a host:

We do ctrl + shift + p  e selecionar Remote-ssh connect to host

Then we create the host with some name, for example:

        vast_ai_something
Then we try to connect to it, it will fail, we click on the try actions, we select the first action which is to change the configuration file, and we place this in there and change for that specific server :


        Host vast_ai_server
        HostName ssh4.vast.ai
        Port 11696
        User root
        IdentityFile ~/.ssh/vast_ai


