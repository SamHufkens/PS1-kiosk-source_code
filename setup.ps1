param (
    [Parameter(Mandatory=$true)]
    [int]$PortNumber,

    [Parameter(Mandatory=$true)]
    [string]$DatabaseURI
)

Write-Host "Running npm install..."
Invoke-Expression "npm install"

$env_content = "PORT=$PortNumber`n`n"
$env_content += "dbURI=$DatabaseURI/kioskRusthuis"

$path_to_env = "./.env"

if (Test-Path $path_to_env) {
    Write-Warning "The .env file already exists. Do you want to overwrite it? Press Y to continue or any other key to cancel."
    $key = Read-Host

    if ($key -ne "Y") {
        Write-Host "Operation cancelled."
        Exit
    }
}

Write-Host "Creating .env file..."
try {
    Set-Content -Path $path_to_env -Value $env_content
    Write-Host "Successfully created .env file."
} catch {
    Write-Error "Failed to create .env file: $_"
    Exit 1
}

Write-Host "Running mongorestore..."
try {
    Invoke-Expression "mongorestore --uri=$DatabaseURI dump"
    Write-Host "Successfully ran mongorestore."
} catch {
    Write-Error "Failed to run mongorestore: $_"
    Exit 1
}

Write-Host "Setup completed successfully."
