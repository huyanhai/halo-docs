#! /bin/bash
if [ ! -d "./.vitepress/dist" ]; then
    echo "./.vitepress/dist 目录不存在"
    exit 1
fi

if [  -d "./docs" ]; then
    rm -rf "./docs"
fi


mv -f ./.vitepress/dist ./docs/