#!/usr/bin/env bash
REF=github.com/aicanhelp/aican.github.io.git

function run_setup() {
    npm install
}

function run_build() {
    gitbook build
}

function run_publish() {
   cd _book
   git init
   git remote add origin https://${REF}
   git add .
   git commit -m "Updated For Github Pages"
   git push --force --quiet "https://{REF}" master:gh-pages
}

function run_actions() {
    rasa run actions --actions actions.empty_actions  $1
}

function get_run_functions() {
    ex_functions=(`declare -F`)
    for f_name in ${ex_functions[*]}
    do
        case ${f_name} in
        run_*)
           echo "${f_name:4}"
           ;;
        esac
    done
}

function start() {
    action=$1
    echo "Try to run ${action}"
    functions=(`get_run_functions`)
    for f in ${functions[*]}
    do
        if [[ "$action" == "$f" ]]; then
            run_${action} $2
            return 0
        fi
    done

    echo "Please input the correct action: ${functions[*]}, current input: ${action}"
}

start $*