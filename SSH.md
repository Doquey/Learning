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
