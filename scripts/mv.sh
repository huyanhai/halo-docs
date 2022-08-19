#! /bin/bash
if [ ! -d "./docs/.vitepress/dist" ]; then
    echo "./docs/.vitepress/dist 目录不存在"
    exit 1
fi

if [  -d "./dist" ]; then
    rm -rf "./dist"
fi

if [ ! -d "./dist" ]; then
    mkdir "./dist"
fi


mv -f ./docs/.vitepress/dist ./


exit 0;