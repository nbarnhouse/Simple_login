//
//  ViewModifier.swift
//  Simple_login
//
//  Created by Nicole Barnhouse on 3/21/23.
//

import SwiftUI

struct TextFieldClearButton: ViewModifier {
    @Binding var text: String
    
    func body(content: Content) -> some View {
        HStack {
            content
            
            if !text.isEmpty {
                Button(
                    action: { self.text = "" },
                    label: {
                        Image("circle_x")
                            .resizable()
                            .frame(width: 30.0, height: 30.0)
                        
                    }
                )
            }
        }
    }
}
