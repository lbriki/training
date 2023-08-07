pipeline {
    agent any

    // environment {
    //     DOCKER_IMAGE_BACKEND = 'my-backend-image:latest'
    //     DOCKER_IMAGE_WEBSITE = 'my-website-image:latest'
    //     DOCKER_IMAGE_QR = 'my-qr-image:latest'
    //     BACKEND_PORT = '3000' // Update the port here
    // }

    // stages {
    //     stage('Build Backend') {
    //         steps {
    //             script {
    //                 dir('applications/backend') {
    //                     sh 'docker build -t $DOCKER_IMAGE_BACKEND .'
    //                 }
    //             }
    //         }
    //     }

    //     stage('Build Website') {
    //         steps {
    //             script {
    //                 dir('applications/website') {
    //                     sh 'docker build -t $DOCKER_IMAGE_WEBSITE .'
    //                 }
    //             }
    //         }
    //     }
   

    //     stage('Build QR') {
    //         steps {
    //             script {
    //                 dir('applications/qr') {
                        
    //                     sh 'docker build -t $DOCKER_IMAGE_QR .'
    //                 }
    //             }
    //         }
    //     }
//         stage('Stop Existing Container') {
//       steps {
//         script {
//           try {
//             sh 'docker stop back'
//             sh 'docker rm back'
//             sh 'docker stop front'
//             sh 'docker rm front'
//             sh 'docker stop qr '
//             sh 'docker rm qr'
//           } catch (Exception e) {
//             // Ignore if the container is not running ..............................
//           }
//         }
//       }
//     }
//         stage('Deploy Backend') {
//             steps {
//                 script {
//                     sh "docker run  -p ${BACKEND_PORT}:3000 -d --name back $DOCKER_IMAGE_BACKEND" 
//                 }
//             }
//         }

     
//         stage('Deploy Website') {
//     steps {
//         script {
//             def absPath = sh(returnStdout: true, script: 'echo $PWD').trim()
//             sh "docker run -p 8081:80 -d -v my_volume:/etc/nginx/html/assets/data --name front $DOCKER_IMAGE_WEBSITE"
//         }
//     }
// }


//         stage('Deploy QR') {
//             steps {
//                 script {
//                     sh "docker run  -p 8400:8400 -d -v my_volume:/applications/qr/generated --name qr $DOCKER_IMAGE_QR"
//                 }
//             }
//         }
// parameters {
//         // Your Extended Choice Parameter for selecting roles
//         choice(name: 'RolesToUpdate', choices: ['roles/back', 'roles/qr', 'roles/front'], description: 'Select the roles to update')
//     }
// stages {
//         stage('Lancement de Ansible playbook') {
//             steps {
//                 sh "ansible-playbook ./ansible/deploy.yml --tags ${params.RolesToUpdate} "
//             }
//         }
//     }
    // stages {
    //     stage('Lancement de Ansible playbook') {
    //         steps {
    //             script {
                    
    //                     sh "ansible-playbook ./ansible/deploy.yml "
    //                 }
    //             }
    //         }
    //     }
    // }
    //   environment {
    //     QR = 'false'
    //     FRONT = 'false'
    //     BACK = 'fase '
    // }
    stages {
        stage('Lancement de Ansible playbook') {
            steps {
                script {
                    sh "ansible-playbook  -i ./ansible/inv.yml ./ansible/deploy.yml --extra-vars \"qr=${QR} front=${FRONT} TEST=${TEST} back=${BACK}\" --vault-password-file=/home/sagon/vault-key "
                }
            }
        }
    }
    
     post {
      always {
        mail      to: "briki1525@gmail.com",
                  subject: "Jenkins Build Notification",
                  body: "The build has completed. Status: ${currentBuild.currentResult}"
                  
                
      
    }
  }
}
