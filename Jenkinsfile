node {
    stage ('Checkout SCM'){
        def scmVars = checkout scm

        withEnv(["GIT_COMMIT=${scmVars.GIT_COMMIT}","GIT_BRANCH=${scmVars.GIT_BRANCH}"]){
            load 'CICD/Jenkinsfile'
        }        
    }
}