
import type { FileSystemNode, FileNode } from './types';

const fileContents: Record<string, string> = {
    "README.md": `
# Quantum-Hemp Bio-Composites

Repository for the NSF–DARPA submission:

**"Room-Temperature Quantum-Coherent Bio-Hybrid Materials: Hemp–Graphene Composites for Sustainable Electronics"**

This repository contains the full submission package, including the formal whitepaper, technical aims, computational models, and supporting documentation.

## Repository Contents

- **/docs**: All proposal documentation (executive summary, aims, whitepaper, public impact, budget).
- **/models**: Preliminary computational models (tight-binding toy model, decoherence simulation, DFT workflow).
- **/data**: Sample datasets and placeholder files for experimental results.
- **/figures**: Conceptual schematics, generated plots, and visual aids for the proposal.

## Quickstart

To generate the initial figures from the toy models:

\`\`\`bash
git clone https://github.com/YOUR_ORG/quantum-hemp-grant
cd quantum-hemp-grant/models
pip install numpy matplotlib
python toy_model_tb.py
python decoherence_mc.py
\`\`\`

This will run the preliminary models and save the output plots to \`../figures/\`.
`,

    "LICENSE": `
MIT License

Copyright (c) 2024 [Your Name/Institution]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,

    "docs/executive_summary.md": `
# EXECUTIVE SUMMARY

**Project Title:** Quantum-Enhanced Hemp-Graphene Composites for Sustainable Electronics
**Principal Investigator:** [Name], [Institution]
**Program:** NSF DMR / DARPA DSO Materials Research
**Duration:** 24 months
**Total Budget:** $155,000

## Project Overview
We propose to develop the first room-temperature quantum-coherent bio-hybrid materials by integrating graphene quantum dots (GQDs) with hemp-derived cellulose nanofibrils (CNF) using computationally-optimized geometric architectures. This interdisciplinary approach addresses critical national needs in sustainable quantum technologies, rare-earth independence, and bio-compatible electronics.

## Technical Innovation
- **Core Breakthrough:** Hemp's natural chiral cellulose structure (Iβ crystalline phase with 31.6° twist) provides topological protection for quantum states through Berry phase shielding. When combined with size-tuned GQDs in mathematically-optimized patterns, preliminary calculations predict quantum coherence times of 50-500 nanoseconds at 300K—representing a 5-50x improvement over existing room-temperature quantum materials.
- **Sustainable Advantage:** Hemp cultivation requires 70% less water than cotton, grows in diverse climates, and produces 3-4x more fiber per acre. At scale, hemp-based quantum materials could eliminate rare-earth dependencies while reducing manufacturing costs by 60-80%.

## Technical Approach
- **Phase 0 (Months 1-6):** Computational validation using density functional theory (DFT) and quantum transport modeling to optimize geometric parameters before experimental synthesis.
- **Phase 1 (Months 7-12):** Bio-composite synthesis with controlled GQD integration and pattern characterization via electron microscopy and photoluminescence mapping.
- **Phase 2 (Months 13-18):** Quantum coherence validation using single-photon correlation spectroscopy and pump-probe measurements across environmental conditions.
- **Phase 3 (Months 19-24):** Prototype device development and performance benchmarking against commercial quantum sensors.

## Expected Outcomes
- **Conservative Success (T₂ = 50-100 ns):** Revolutionary flexible quantum materials platform enabling bio-compatible sensors and sustainable electronics manufacturing.
- **Breakthrough Success (T₂ = 100-500 ns):** Room-temperature quantum coherence suitable for practical quantum sensing applications, establishing new paradigm for bio-quantum hybrid materials.
- **Commercial Impact:** Target markets include quantum sensing ($1.3B by 2030), neural interfaces ($2.4B by 2030), and sustainable electronics ($47B by 2030).
`,

    "docs/aims.md": `
# TECHNICAL AIMS

## Aim 1: Establish Computational Framework for Bio-Quantum Materials Design
- **Objective:** Develop and validate theoretical models predicting quantum coherence in hemp-graphene composites.
- **Approach:**
  - Density functional theory (DFT) calculations of CNF-GQD electronic coupling.
  - Quantum transport simulations using non-equilibrium Green's functions (NEGF).
  - Machine learning optimization of geometric parameters for coherence enhancement.
- **Success Metrics:**
  - Validated theoretical model with <20% error vs. experimental measurements.
  - Computational prediction of optimal geometric configurations.
- **Deliverables:**
  - Open-source computational toolkit for bio-quantum materials design.
  - Peer-reviewed publication in computational materials science journal.

## Aim 2: Synthesize and Characterize Quantum-Active Bio-Hybrid Composites
- **Objective:** Create reproducible hemp-graphene composites with enhanced optical and electronic properties.
- **Approach:**
  - Optimized hemp cellulose nanofiber extraction using TEMPO-mediated oxidation.
  - Size-controlled graphene quantum dot synthesis via green glucose pyrolysis.
  - Template-directed assembly in computationally-optimized geometric patterns.
- **Success Metrics:**
  - 1.5x photoluminescence enhancement in optimized vs. random arrangements.
  - Structural confirmation of target geometric patterns with >80% fidelity.
- **Deliverables:**
  - Scalable synthesis protocols suitable for technology transfer.
  - Materials characterization database with structure-property correlations.

## Aim 3: Validate Quantum Coherence and Develop Prototype Applications
- **Objective:** Demonstrate quantum properties in bio-hybrid materials and create functional devices.
- **Approach:**
  - Single-photon correlation measurements using Hanbury Brown-Twiss interferometry.
  - Coherence time (T₂) extraction via pump-probe spectroscopy.
- **Success Metrics:**
  - Quantum coherence time T₂ > 50 ns at room temperature.
  - Single-photon emission purity g²(0) < 0.5.
- **Deliverables:**
  - Validated quantum material platform with characterized performance envelope.
  - Working prototype quantum sensor with competitive sensitivity specifications.
`,

    "docs/whitepaper.md": `
# Whitepaper: Quantum-Coherent Graphene-Hemp Composite Molecular Architecture

*(This document contains the full speculative whitepaper, blending established materials science with visionary quantum physics to outline the high-risk, high-reward nature of the project. This serves as the internal "master codex" for the project's grand vision.)*

## Core Material Structure
- **Base Matrix:** Hemp-Derived Cellulose Nanofibrils (CNF)
- **Integrated Quantum Layer:** Graphene Quantum Dots (GQDs)

## Quantum Coherence Architecture
- **Topological Protection Mechanism:** Hemp Fiber Core → Graphene Shell → Quantum Edge States
- **Key Innovation:** Fibonacci Quantum Wells

## Material Synthesis Protocol
- **Phase 1:** Hemp Nanofiber Preparation
- **Phase 2:** Graphene Quantum Dot Integration
- **Phase 3:** Quantum State Engineering

... (The full, detailed v2.0 whitepaper text goes here) ...
`,

    "docs/public_impact.md": `
# PUBLIC IMPACT BRIEF

## Sustainable Quantum Technology for National Competitiveness
- **The Challenge:** Current quantum technologies depend on rare-earth elements, operate only at extreme temperatures, and use rigid materials incompatible with biological systems.
- **Our Solution:** Hemp-based quantum materials that operate at room temperature, use abundant domestic agricultural resources, and integrate seamlessly with biological systems.

## Economic Impact
- **Job Creation:** High-value hemp cultivation, advanced manufacturing, and high-tech R&D.
- **Market Opportunities:** Quantum sensing ($1.3B by 2030), neural interfaces ($2.4B by 2030), sustainable electronics ($47B by 2030).
- **Supply Chain Security:** Eliminates dependence on rare-earth imports.

## Societal Benefits
- **Healthcare Advancement:** Ultra-sensitive sensors for early disease detection and bio-compatible neural interfaces.
- **Environmental Sustainability:** Carbon-sequestering crops and biodegradable electronics.
- **Educational Opportunity:** Interdisciplinary STEM workforce development.

## National Security Applications
- **Defense Technologies:** Ultra-sensitive magnetic anomaly detection, quantum-enhanced navigation, and soldier health monitoring.
- **Critical Infrastructure Protection:** Quantum encryption for secure communications and threat detection systems.
`,

    "docs/budget_justification.md": `
# BUDGET JUSTIFICATION & ALLOCATION ($155,000)

This budget is designed for maximum capital efficiency by leveraging existing institutional infrastructure for high-cost characterization, focusing funds on personnel, materials, and novel experimentation.

- **Computational Foundation (15%): $23,000**
  - Covers 6 months of a graduate research assistant (GRA) to perform DFT/NEGF simulations.
  - Justification: High-leverage theoretical validation de-risks expensive experimental work. Yields open-source tools benefiting the broader community.

- **Materials Synthesis (21%): $32,000**
  - Covers chemical precursors (hemp pulp, reagents), GQD synthesis materials, and laboratory consumables.
  - Justification: Enables parallel testing of multiple geometric configurations to accelerate discovery. Focuses on scalable processes suitable for tech transfer.

- **Quantum Characterization (32%): $50,000**
  - Covers usage fees for shared institutional facilities (TEM, AFM, HBT interferometer, pump-probe laser system).
  - Justification: Provides access to state-of-the-art measurement capabilities without capital expenditure. Ensures results are validated on calibrated, high-performance equipment.

- **Device Development (19%): $30,000**
  - Covers materials for prototype fabrication (substrates, contacts) and benchmarking equipment time.
  - Justification: Aims to produce a functional prototype demonstrating practical application, a key deliverable for agencies like DARPA.

- **Contingency & Management (13%): $20,000**
  - Buffer for unforeseen experimental challenges, process optimization, and publication costs.
  - Justification: Standard practice for high-risk research, ensuring project milestones can be met despite experimental variance.
`,

    "docs/references.md": `
# Selected References

1. Engel, G. S. et al. "Evidence for wavelike energy transfer through quantum coherence in photosynthetic systems." *Nature* 446, 782–786 (2007).
2. Ritz, T. et al. "A model for vision-based magnetoreception in birds." *Biophysical Journal* 78, 707–718 (2000).
3. Cao, J. et al. "Quantum biology revisited." *Science Advances* 6, eaaz4888 (2020).
4. Novoselov, K. S. et al. "Electric field effect in atomically thin carbon films." *Science* 306, 666–669 (2004).
5. Moon, R. J. et al. "Cellulose nanomaterials review: structure, properties and nanocomposites." *Chemical Society Reviews* 40, 3941-3994 (2011).
6. Peng, J. et al. "Graphene quantum dots derived from carbon fibers." *Nano Letters* 12, 844–849 (2012).
7. Hasan, M. Z., & Kane, C. L. "Colloquium: Topological insulators." *Reviews of Modern Physics* 82, 3045 (2010).
`,

    "models/toy_model_tb.py": `
import numpy as np
import matplotlib.pyplot as plt

def main():
    """
    Generates a toy Density of States (DOS) plot for a GQD under a hypothetical
    chiral potential, demonstrating a qualitative electronic signature.
    """
    # Energy axis
    E = np.linspace(-3, 3, 500)
    gamma = 0.08  # Lorentzian broadening
    delta = 0.3   # Chiral potential offset (symmetry breaking)

    # Simple DOS model: Sum of Lorentzian peaks for discrete energy levels
    dos_no_potential = np.zeros_like(E)
    dos_with_potential = np.zeros_like(E)

    for n in range(-2, 3):
        dos_no_potential += gamma / ((E - n)**2 + gamma**2)
        dos_with_potential += gamma / ((E - (n + np.sign(n) * delta))**2 + gamma**2)

    # Plotting
    plt.figure(figsize=(8, 5))
    plt.plot(E, dos_no_potential, 'k--', label="Symmetric GQD (No Potential)")
    plt.plot(E, dos_with_potential, 'b-', label="GQD under Chiral Potential")
    plt.xlabel("Energy (Arbitrary Units)")
    plt.ylabel("Density of States (DOS)")
    plt.title("Toy Model: DOS of GQD Modified by Chiral Environment")
    plt.legend()
    plt.grid(True, linestyle='--', alpha=0.6)
    
    # Save figure
    output_path = "../figures/toy_model_dos.png"
    plt.savefig(output_path, dpi=300, bbox_inches='tight')
    plt.close()
    print(f"Toy model DOS plot saved to {output_path}")

if __name__ == "__main__":
    main()
`,

    "models/decoherence_mc.py": `
import numpy as np
import matplotlib.pyplot as plt

def simulate_decoherence(N_paths=50, t_max=200, T2_base=50, noise_factor=0.1):
    """
    Runs a simple Monte Carlo simulation of a decoherence process.
    """
    times = np.linspace(0, t_max, 500)
    
    # Generate multiple coherence decay paths
    all_paths = []
    for _ in range(N_paths):
        # Multiplicative noise model
        noise = 1 + np.random.normal(0, noise_factor, size=len(times))
        coherence_path = np.exp(-times / T2_base) * noise
        all_paths.append(np.clip(coherence_path, 0, 1.1))

    return times, np.array(all_paths)

def main():
    """
    Main function to run simulation and plot results.
    """
    times, all_paths = simulate_decoherence()
    
    mean_coherence = np.mean(all_paths, axis=0)
    std_coherence = np.std(all_paths, axis=0)

    # Plotting
    plt.figure(figsize=(8, 5))
    plt.plot(times, mean_coherence, 'r-', lw=2, label="Mean Coherence (T₂ ≈ 50 ns)")
    plt.fill_between(times, mean_coherence - std_coherence, mean_coherence + std_coherence,
                     color='red', alpha=0.2, label="1σ Fluctuation")
    
    plt.xlabel("Time (ns)")
    plt.ylabel("Coherence (ρ_12)")
    plt.title("Monte Carlo Decoherence Simulation with Environmental Noise")
    plt.legend()
    plt.ylim(0, 1.1)
    plt.grid(True, linestyle='--', alpha=0.6)
    
    # Save figure
    output_path = "../figures/decoherence_mc.png"
    plt.savefig(output_path, dpi=300, bbox_inches='tight')
    plt.close()
    print(f"Decoherence simulation plot saved to {output_path}")


if __name__ == "__main__":
    main()
`,

    "models/dft_workflow.md": `
# DFT Workflow for Hemp–GQD Systems

This document outlines the proposed computational workflow for Aim 1.

## 1. Software & Setup
- **Primary Tool:** Quantum ESPRESSO (for its open-source nature) or VASP (if licenses are available).
- **Pseudopotentials:** Standard PBE pseudopotentials for C, O, H from a reliable library (e.g., PSLibrary).
- **Functionals:** Start with PBE-GGA for structural relaxation. For more accurate electronic properties, incorporate van der Waals corrections (e.g., vdW-DF2) and consider hybrid functionals (e.g., HSE06) for select final calculations.
- **System Size:** Initial models will use a single cellulose chain segment (Iβ phase) and a GQD of ~2 nm (~50-100 atoms) to balance accuracy and computational cost.

## 2. Workflow Steps
1.  **Structure Generation:**
    - Build a model of the *Iβ* cellulose nanofibril segment, programmatically enforcing the target 31.6° helical twist between monomer units.
    - Create a graphene quantum dot (e.g., a circumcoronene derivative) and functionalize its edges with hydroxyl (-OH) or carboxyl (-COOH) groups.
2.  **Structural Relaxation:**
    - Place the GQD near the CNF surface.
    - Perform a full geometry optimization (relaxing all atomic positions) until forces on all atoms are below a threshold (e.g., < 0.01 eV/Å). This will determine the lowest-energy binding configuration.
3.  **Electronic Structure Calculation (Post-Relaxation):**
    - Perform a static self-consistent field (SCF) calculation on the relaxed geometry.
    - Compute the band structure and Density of States (DOS). Analyze bandgap shifts and the hybridization of GQD and CNF electronic states near the Fermi level.
4.  **Advanced Properties (Hypothesis Testing):**
    - Use tools like Wannier90 to compute maximally localized Wannier functions.
    - Calculate the Berry curvature of the relevant electronic bands to search for non-trivial geometric phase effects stemming from the chiral potential.
5.  **Parameter Extraction:**
    - Extract key parameters from the DFT results (e.g., site energies, coupling strengths) to build a simplified tight-binding Hamiltonian for use in larger-scale NEGF or master equation simulations of quantum transport and decoherence.

## 3. Expected Outputs
- A plot of binding energy vs. GQD-CNF separation/orientation.
- Projected Density of States (PDOS) plots showing the contribution of GQD vs. CNF atoms.
- A Berry curvature map of the Brillouin zone for the coupled system.
- A quantitative estimate of the effective spin-orbit coupling induced by the chiral substrate.
`,

    "data/sample_results/toy_dos.csv": `Energy,DOS_Symmetric,DOS_Chiral
-3.0,0.003,0.003
-2.5,0.006,0.021
-2.0,0.017,0.882
-1.5,0.008,0.024
-1.0,0.882,0.014
-0.5,0.024,0.010
0.0,0.010,0.010
0.5,0.024,0.010
1.0,0.882,0.014
1.5,0.008,0.024
2.0,0.017,0.882
2.5,0.006,0.021
3.0,0.003,0.003
`,

    "data/sample_results/pl_spectra_placeholder.csv": `Wavelength_nm,Intensity_Random,Intensity_Optimized
400,0.2,0.2
420,0.5,0.6
440,0.8,1.2
460,1.0,1.5
480,0.7,1.1
500,0.4,0.6
520,0.2,0.3
`
};

const placeholderFiles = [
    "figures/hemp_gqd_schematic.png",
    "figures/fibonacci_layout.png",
    "figures/benchmark_table.png"
];

const allPaths = [...Object.keys(fileContents), ...placeholderFiles];

const buildTree = (): FileSystemNode[] => {
    const root: any = { type: 'directory', name: 'root', children: [] };

    for (const path of allPaths) {
        const parts = path.split('/');
        let currentNode = root;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            const isFile = i === parts.length - 1;

            let childNode = currentNode.children.find((child: FileSystemNode) => child.name === part);

            if (!childNode) {
                if (isFile) {
                    const content = fileContents[path] || "Placeholder for visual asset.";
                    childNode = { type: 'file', name: part, content: content.trim() };
                } else {
                    childNode = { type: 'directory', name: part, children: [] };
                }
                currentNode.children.push(childNode);
            }
            currentNode = childNode;
        }
    }
    return root.children.sort((a: FileSystemNode, b: FileSystemNode) => {
        if (a.type === 'directory' && b.type === 'file') return -1;
        if (a.type === 'file' && b.type === 'directory') return 1;
        return a.name.localeCompare(b.name);
    });
};

export const fileSystemData: FileSystemNode[] = buildTree();

export const findFileByPath = (nodes: FileSystemNode[], path: string): FileNode | null => {
    const parts = path.split('/');
    let currentNodes: FileSystemNode[] = nodes;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const node = currentNodes.find(n => n.name === part);

        if (!node) return null;

        if (node.type === 'file' && i === parts.length - 1) {
            return node;
        }

        if (node.type === 'directory') {
            currentNodes = node.children;
        } else {
            return null;
        }
    }
    return null;
};
