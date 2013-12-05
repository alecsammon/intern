#!/usr/bin/env node
global.window = require("jsdom")
                .jsdom()
                .createWindow();

require('../client');
