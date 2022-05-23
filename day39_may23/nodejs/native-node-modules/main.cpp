#include <node.h>
#include <iostream>
#include <cstdio>

void convertDecimalToOtherBase(int number, int base) {
    if(number == 0) {
        return;
    }

    int x = number % base;
    number /= base;

    if(x < 0) {
        number += 1
    }

    convertDecimalToOtherBase(number, base);
    std::cout << (x < 0 ? (x + (base * -1)) : x);
}


void NativePrintf(const v8::FunctionCallbackinfo<v8::Value>& args) {
    int number = (int) args[0]->NumberValue();
    
    std::cout << "Base 10: ";
    convertDecimalToOtherBase(number, 10);

    std::cout << std::endl;
    std::cout << "Base 2: ";
    convertDecimalToOtherBase(number, 2);

    std::cout << std::endl;
}

void initialize(v8::Local <v8::Object> exports) {
    NODE_SET_METHOD(exports, "nativePrintf", NativePrintf);
}

NODE_MODULE(module_name, initialize);